"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FieldName = "name" | "business" | "email" | "phone" | "message";

interface FieldConfig {
  name: FieldName;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  required: boolean;
  autoComplete?: string;
  placeholder: string;
}

const FIELDS: FieldConfig[] = [
  {
    name: "name",
    label: "Full name",
    type: "text",
    required: true,
    autoComplete: "name",
    placeholder: "Jane Smith",
  },
  {
    name: "business",
    label: "Business name",
    type: "text",
    required: false,
    autoComplete: "organization",
    placeholder: "Smith & Co Ltd",
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    required: true,
    autoComplete: "email",
    placeholder: "jane@smithco.co.uk",
  },
  {
    name: "phone",
    label: "Phone number",
    type: "tel",
    required: false,
    autoComplete: "tel",
    placeholder: "020 7946 0123",
  },
];

const initialState: Record<FieldName, string> = {
  name: "",
  business: "",
  email: "",
  phone: "",
  message: "",
};

const inputClasses =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-heading placeholder:text-body/50 transition-colors duration-200 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/40";

export function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Simulate an async submission. Wire up to a Server Action or API route.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setValues(initialState);
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-10 text-center shadow-soft"
      >
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-cta/10 text-cta">
          <CheckCircle2 className="size-8" aria-hidden="true" />
        </span>
        <h3 className="text-xl font-bold text-heading">Thank you!</h3>
        <p className="max-w-sm text-body">
          Your message has been received. One of our accountants will be in touch
          within one business day.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <div
            key={field.name}
            className={cn(field.name === "message" && "sm:col-span-2")}
          >
            <label
              htmlFor={field.name}
              className="mb-2 block text-sm font-medium text-heading"
            >
              {field.label}
              {field.required && (
                <span className="ml-1 text-cta" aria-hidden="true">
                  *
                </span>
              )}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              value={values[field.name]}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        ))}

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-heading"
          >
            How can we help?
            <span className="ml-1 text-cta" aria-hidden="true">
              *
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us a little about your business and what you're looking for…"
            value={values.message}
            onChange={handleChange}
            className={cn(inputClasses, "resize-y")}
          />
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="mt-6 w-full"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>
      <p className="mt-4 text-center text-sm text-body">
        We&rsquo;ll never share your details. Fields marked{" "}
        <span className="text-cta">*</span> are required.
      </p>
    </form>
  );
}
