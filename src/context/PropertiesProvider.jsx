import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { featuredProperties as staticFallbackProperties } from "../data/featuredProperties";
import { fetchPropertiesFromApi, getPropertyByLodgifyId } from "../lib/propertiesApi";

const PropertiesContext = createContext({
  properties: staticFallbackProperties,
  loading: true,
  source: "fallback",
  getByLodgifyId: () => null,
});

export function PropertiesProvider({ children }) {
  const [properties, setProperties] = useState(staticFallbackProperties);
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState("fallback");

  useEffect(() => {
    let cancelled = false;

    const load = () => {
      fetchPropertiesFromApi().then((result) => {
        if (cancelled) return;
        setProperties(result.properties);
        setSource(result.source);
        setLoading(false);
      });
    };

    const idleHandle = window.requestIdleCallback
      ? window.requestIdleCallback(load, { timeout: 2500 })
      : window.setTimeout(load, 2500);

    return () => {
      cancelled = true;
      if (window.requestIdleCallback) {
        window.cancelIdleCallback(idleHandle);
      } else {
        window.clearTimeout(idleHandle);
      }
    };
  }, []);

  const value = useMemo(
    () => ({
      properties,
      loading,
      source,
      getByLodgifyId: (lodgifyId) => getPropertyByLodgifyId(properties, lodgifyId),
    }),
    [properties, loading, source],
  );

  return (
    <PropertiesContext.Provider value={value}>{children}</PropertiesContext.Provider>
  );
}

export function useProperties() {
  return useContext(PropertiesContext);
}
