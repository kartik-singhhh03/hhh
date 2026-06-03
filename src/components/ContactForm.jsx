import { useState } from "react";

const INQUIRY_OPTIONS = [
  { value: "", label: "Select inquiry type" },
  { value: "General Inquiry", label: "General Inquiry" },
  { value: "Book a Stay", label: "Book a Stay" },
  { value: "List My Property", label: "List My Property" },
  { value: "Partnership Opportunity", label: "Partnership Opportunity" },
  { value: "Other", label: "Other" },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Full name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.inquiryType) {
    errors.inquiryType = "Please select an inquiry type.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

const INITIAL_VALUES = {
  name: "",
  email: "",
  phone: "",
  inquiryType: "",
  message: "",
};

export default function ContactForm({ formId = "contactPageForm" }) {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");

  const isSubmitting = status === "loading";
  const isSuccess = status === "success";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (submitError) setSubmitError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");

    const validationErrors = validateForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      return;
    }

    if (!endpoint) {
      setSubmitError(
        "Contact form is not configured. Please email hello@holidayhomehost.ae directly.",
      );
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          inquiryType: values.inquiryType,
          message: values.message.trim(),
          _replyto: values.email.trim(),
          _subject: `HHH Contact: ${values.inquiryType}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setValues(INITIAL_VALUES);
      setStatus("success");
    } catch {
      setStatus("error");
      setSubmitError("Something went wrong. Please try again later.");
    }
  };

  if (isSuccess) {
    return (
      <div
        className="contact-form-status contact-form-status--success"
        role="status"
        aria-live="polite"
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          check_circle
        </span>
        <p>
          Thank you for contacting Holiday Home Host. Our team will get back to
          you shortly.
        </p>
        <button
          type="button"
          className="btn-outline contact-form-reset"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="contact-form contact-page-form"
      id={formId}
      noValidate
      onSubmit={handleSubmit}
      aria-describedby={submitError ? `${formId}-submit-error` : undefined}
    >
      <div className="form-row">
        <div className={`form-group ${errors.name ? "has-error" : ""}`}>
          <label htmlFor={`${formId}-name`}>
            Full Name <span className="required-mark" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id={`${formId}-name`}
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            disabled={isSubmitting}
            autoComplete="name"
          />
          {errors.name ? (
            <p className="form-error" id={`${formId}-name-error`} role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className={`form-group ${errors.email ? "has-error" : ""}`}>
          <label htmlFor={`${formId}-email`}>
            Email Address{" "}
            <span className="required-mark" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id={`${formId}-email`}
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            disabled={isSubmitting}
            autoComplete="email"
          />
          {errors.email ? (
            <p className="form-error" id={`${formId}-email-error`} role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor={`${formId}-phone`}>Phone Number</label>
          <input
            type="tel"
            id={`${formId}-phone`}
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="+971 50 000 0000"
            disabled={isSubmitting}
            autoComplete="tel"
          />
        </div>

        <div className={`form-group ${errors.inquiryType ? "has-error" : ""}`}>
          <label htmlFor={`${formId}-inquiryType`}>
            Inquiry Type{" "}
            <span className="required-mark" aria-hidden="true">*</span>
          </label>
          <select
            id={`${formId}-inquiryType`}
            name="inquiryType"
            value={values.inquiryType}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={Boolean(errors.inquiryType)}
            aria-describedby={
              errors.inquiryType ? `${formId}-inquiryType-error` : undefined
            }
            disabled={isSubmitting}
          >
            {INQUIRY_OPTIONS.map((option) => (
              <option key={option.value || "placeholder"} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.inquiryType ? (
            <p
              className="form-error"
              id={`${formId}-inquiryType-error`}
              role="alert"
            >
              {errors.inquiryType}
            </p>
          ) : null}
        </div>
      </div>

      <div className={`form-group ${errors.message ? "has-error" : ""}`}>
        <label htmlFor={`${formId}-message`}>
          Message <span className="required-mark" aria-hidden="true">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={6}
          placeholder="Tell us how we can help..."
          required
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          disabled={isSubmitting}
          style={{ minHeight: "150px" }}
        />
        {errors.message ? (
          <p className="form-error" id={`${formId}-message-error`} role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      {submitError ? (
        <p
          className="form-error form-error--submit"
          id={`${formId}-submit-error`}
          role="alert"
        >
          {submitError}
        </p>
      ) : null}

      <div className="form-submit">
        <button
          type="submit"
          className="btn-primary-dark"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          style={{ width: "100%", justifyContent: "center" }}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {isSubmitting ? "hourglass_top" : "send"}
          </span>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
