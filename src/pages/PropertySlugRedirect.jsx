import { Navigate, useParams } from "react-router-dom";
import { slugToLodgifyId } from "../data/propertyRoutes";

export default function PropertySlugRedirect() {
  const { slug } = useParams();
  const lodgifyId = slugToLodgifyId[slug];

  if (!lodgifyId) {
    return <Navigate to="/" replace />;
  }

  return <Navigate to={`/property/${lodgifyId}`} replace />;
}
