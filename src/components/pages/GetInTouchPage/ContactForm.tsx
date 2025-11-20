"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    knowAbout: [] as string[],
    location: "",
    coupleName: "",
    venue: "",
    state: "",
    eventDate: "",
    eventsCovered: [] as string[],
    eventDetails: "",
    story: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Auto-dismiss messages after 5 seconds
  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, value: string) => {
    setFormData((prev) => {
      const currentArray = prev[name as keyof typeof prev] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];
      return { ...prev, [name]: newArray };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Validate required checkbox fields
      if (formData.knowAbout.length === 0) {
        alert("Please select how you got to know about us");
        setIsSubmitting(false);
        return;
      }

      if (formData.eventsCovered.length === 0) {
        alert("Please select at least one event to be covered");
        setIsSubmitting(false);
        return;
      }

      // Google Form submission URL
      const formUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSdI5pBkF8-fUrOzO4eFC8y6YYpm8CTFseQ1jCPPy_Z9hyBD3g/formResponse";

      // Use URLSearchParams for better compatibility with Google Forms
      const params = new URLSearchParams();

      // Full Name (required)
      params.append("entry.1395777238", formData.fullName);

      // Email ID (required)
      params.append("entry.953266231", formData.email);

      // Phone Number (required)
      params.append("entry.1296975309", formData.phone);

      // How did you get to know about us (checkboxes - multiple values)
      formData.knowAbout.forEach((value) => {
        params.append("entry.1003048517", value);
      });

      // Your Location (required)
      params.append("entry.1244871176", formData.location);

      // Name of the Couple (optional)
      if (formData.coupleName) {
        params.append("entry.1448113450", formData.coupleName);
      }

      // Venue/Location of the main event (required)
      params.append("entry.1801158162", formData.venue);

      // State (required)
      params.append("entry.14164799", formData.state);

      // Date of the Main Event (split into day, month, year)
      if (formData.eventDate) {
        const date = new Date(formData.eventDate);
        const day = date.getDate().toString();
        const month = (date.getMonth() + 1).toString(); // getMonth() returns 0-11
        const year = date.getFullYear().toString();

        params.append("entry.744002936_day", day);
        params.append("entry.744002936_month", month);
        params.append("entry.744002936_year", year);
      }

      // Events to be covered (checkboxes - multiple values, required)
      // Note: If this is required, at least one must be selected
      formData.eventsCovered.forEach((event) => {
        params.append("entry.1838429197", event);
      });

      // Event Details (required)
      params.append("entry.1982286073", formData.eventDetails);

      // Do you have a story to share (optional)
      if (formData.story) {
        params.append("entry.1629766514", formData.story);
      }

      // Submit to Google Form using URLSearchParams
      const response = await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      // With no-cors mode, we can't read the response, so assume success
      // If there's an error, it will be caught in the catch block
      setSubmitStatus("success");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        knowAbout: [],
        location: "",
        coupleName: "",
        venue: "",
        state: "",
        eventDate: "",
        eventsCovered: [],
        eventDetails: "",
        story: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12"
      style={{ backgroundColor: "#ede6e0" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-center mb-6"
          style={{
            fontFamily: "var(--font-family-display)",
          }}
        >
          Get In Touch
        </h2>

        {/* Subheading Paragraph */}
        <p
          className="text-center text-xs sm:text-sm md:text-base leading-relaxed mb-12 max-w-2xl mx-auto"
          style={{
            fontFamily: "var(--font-family-body)",
          }}
        >
          We&apos;d love to hear about your special day and help capture your
          beautiful moments. Please fill out the form below, and we&apos;ll get
          back to you as soon as possible.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm mb-2"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "400",
                color: "#1a1a1a",
              }}
            >
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded focus:outline-none transition-colors"
              style={{
                fontFamily: "var(--font-family-body)",
                backgroundColor: "#fff",
                border: "1px solid #c2c5aa",
              }}
            />
          </div>

          {/* Email ID */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm mb-2"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "400",
                color: "#1a1a1a",
              }}
            >
              Email ID <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded focus:outline-none transition-colors"
              style={{
                fontFamily: "var(--font-family-body)",
                backgroundColor: "#fff",
                border: "1px solid #c2c5aa",
              }}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm mb-2"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "400",
                color: "#1a1a1a",
              }}
            >
              Phone Number (WhatsApp) <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 rounded focus:outline-none transition-colors"
              style={{
                fontFamily: "var(--font-family-body)",
                backgroundColor: "#fff",
                border: "1px solid #c2c5aa",
              }}
            />
          </div>

          {/* How did you get to know about us */}
          <div>
            <label
              className="block text-sm mb-3"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "400",
                color: "#1a1a1a",
              }}
            >
              How did you get to know about us?{" "}
              <span className="text-red-600">*</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.knowAbout.includes("Social Media")}
                  onChange={() =>
                    handleCheckboxChange("knowAbout", "Social Media")
                  }
                  className="mr-3 w-4 h-4"
                />
                <span
                  style={{
                    fontFamily: "var(--font-family-body)",
                    fontWeight: "300",
                  }}
                >
                  Social Media
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.knowAbout.includes("Reference")}
                  onChange={() =>
                    handleCheckboxChange("knowAbout", "Reference")
                  }
                  className="mr-3 w-4 h-4"
                />
                <span
                  style={{
                    fontFamily: "var(--font-family-body)",
                    fontWeight: "300",
                  }}
                >
                  Reference
                </span>
              </label>
            </div>
          </div>

          {/* Your Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm mb-2"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "400",
                color: "#1a1a1a",
              }}
            >
              Your Location <span className="text-red-600">*</span>
            </label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded focus:outline-none transition-colors"
              style={{
                fontFamily: "var(--font-family-body)",
                backgroundColor: "#fff",
                border: "1px solid #c2c5aa",
              }}
            >
              <option value="">Select location</option>
              <option value="India">India</option>
              <option value="Abroad">Abroad</option>
            </select>
          </div>

          {/* Name of the Couple */}
          <div>
            <label
              htmlFor="coupleName"
              className="block text-sm mb-2"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "400",
                color: "#1a1a1a",
              }}
            >
              Name of the Couple
            </label>
            <input
              type="text"
              id="coupleName"
              name="coupleName"
              value={formData.coupleName}
              onChange={handleInputChange}
              placeholder="Enter the couple's names"
              className="w-full px-4 py-3 rounded focus:outline-none transition-colors"
              style={{
                fontFamily: "var(--font-family-body)",
                backgroundColor: "#fff",
                border: "1px solid #c2c5aa",
              }}
            />
          </div>

          {/* Venue/Location of the main event */}
          <div>
            <label
              htmlFor="venue"
              className="block text-sm mb-2"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "400",
                color: "#1a1a1a",
              }}
            >
              Venue/Location of the main event{" "}
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={formData.venue}
              onChange={handleInputChange}
              required
              placeholder="Enter the venue or location"
              className="w-full px-4 py-3 rounded focus:outline-none transition-colors"
              style={{
                fontFamily: "var(--font-family-body)",
                backgroundColor: "#fff",
                border: "1px solid #c2c5aa",
              }}
            />
          </div>

          {/* State */}
          <div>
            <label
              htmlFor="state"
              className="block text-sm mb-2"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "400",
                color: "#1a1a1a",
              }}
            >
              State <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
              placeholder="Enter the state"
              className="w-full px-4 py-3 rounded focus:outline-none transition-colors"
              style={{
                fontFamily: "var(--font-family-body)",
                backgroundColor: "#fff",
                border: "1px solid #c2c5aa",
              }}
            />
          </div>

          {/* Date of the Main Event */}
          <div className="w-full overflow-hidden">
            <label
              htmlFor="eventDate"
              className="block text-sm mb-2"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "400",
                color: "#1a1a1a",
              }}
            >
              Date of the Main Event <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded focus:outline-none transition-colors"
              style={{
                fontFamily: "var(--font-family-body)",
                backgroundColor: "#fff",
                border: "1px solid #c2c5aa",
                boxSizing: "border-box",
                minWidth: "0",
                width: "100%",
                maxWidth: "100%",
              }}
            />
          </div>

          {/* Events to be covered */}
          <div>
            <label
              className="block text-sm mb-3"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "400",
                color: "#1a1a1a",
              }}
            >
              Events to be covered <span className="text-red-600">*</span>
            </label>
            <p
              className="text-xs mb-3"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "300",
                color: "#6a6a6a",
              }}
            >
              Please tick the appropriate events and mention the additional
              events in the Events Details box
            </p>
            <div className="space-y-2">
              {[
                "Fixation / Roka",
                "Engagement",
                "Wedding",
                "Destination Wedding (India)",
                "Destination Wedding (International)",
                "Other",
              ].map((event) => (
                <label key={event} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.eventsCovered.includes(event)}
                    onChange={() =>
                      handleCheckboxChange("eventsCovered", event)
                    }
                    className="mr-3 w-4 h-4"
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-family-body)",
                      fontWeight: "300",
                    }}
                  >
                    {event}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Event Details */}
          <div>
            <label
              htmlFor="eventDetails"
              className="block text-sm mb-2"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "400",
                color: "#1a1a1a",
              }}
            >
              Event Details <span className="text-red-600">*</span>
            </label>
            <p
              className="text-xs mb-3"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "300",
                color: "#6a6a6a",
              }}
            >
              Please mention the date, event, venue, guest count and
              time/duration for each event. For example: 5/1/2026 - Wedding -
              Grand Hyatt, Kochi - 800pax - 8am to 3pm.
            </p>
            <textarea
              id="eventDetails"
              name="eventDetails"
              value={formData.eventDetails}
              onChange={handleInputChange}
              required
              rows={5}
              placeholder="e.g., 5/1/2026 - Wedding - Grand Hyatt, Kochi - 800pax - 8am to 3pm"
              className="w-full px-4 py-3 rounded focus:outline-none transition-colors resize-none"
              style={{
                fontFamily: "var(--font-family-body)",
                backgroundColor: "#fff",
                border: "1px solid #c2c5aa",
              }}
            />
          </div>

          {/* Do you have a story to share */}
          <div>
            <label
              htmlFor="story"
              className="block text-sm mb-2"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "400",
                color: "#1a1a1a",
              }}
            >
              Do you have a story to share?
            </label>
            <p
              className="text-xs mb-3"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "300",
                color: "#6a6a6a",
              }}
            >
              We would love to hear it !!
            </p>
            <textarea
              id="story"
              name="story"
              value={formData.story}
              onChange={handleInputChange}
              rows={4}
              placeholder="Share your story with us..."
              className="w-full px-4 py-3 rounded focus:outline-none transition-colors resize-none"
              style={{
                fontFamily: "var(--font-family-body)",
                backgroundColor: "#fff",
                border: "1px solid #c2c5aa",
              }}
            />
          </div>

          {/* Submit Status Messages */}
          {submitStatus === "success" && (
            <div
              className="py-8 px-6 text-center transition-opacity duration-300 opacity-100"
              style={{
                backgroundColor: "#ede6e0",
              }}
            >
              <p
                className="text-2xl md:text-3xl font-light mb-4 italic"
                style={{
                  fontFamily: "var(--font-family-display)",
                  color: "#2E2E2E",
                }}
              >
                &quot;Your story is now{" "}
                <span
                  style={{ fontFamily: "var(--font-family-script)" }}
                  className="normal-case"
                >
                  ours to tell
                </span>
                &quot;
              </p>
              <p
                className="text-xs md:text-sm tracking-wide"
                style={{
                  fontFamily: "var(--font-family-body)",
                  fontWeight: "300",
                  color: "#6a6a6a",
                  letterSpacing: "0.1em",
                }}
              >
                Thank you for reaching out. We&apos;ll be in touch soon.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div
              className="py-8 px-6 text-center transition-opacity duration-300 opacity-100"
              style={{
                backgroundColor: "#ede6e0",
              }}
            >
              <p
                className="text-2xl md:text-3xl font-light mb-4 italic"
                style={{
                  fontFamily: "var(--font-family-display)",
                  color: "#2E2E2E",
                }}
              >
                &quot;Sometimes the best{" "}
                <span
                  style={{ fontFamily: "var(--font-family-script)" }}
                  className="normal-case"
                >
                  stories
                </span>{" "}
                need a second try&quot;
              </p>
              <p
                className="text-xs md:text-sm tracking-wide"
                style={{
                  fontFamily: "var(--font-family-body)",
                  fontWeight: "300",
                  color: "#6a6a6a",
                  letterSpacing: "0.1em",
                }}
              >
                We encountered an issue. Please try submitting again.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-12 py-4 text-white transition-all duration-300 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed rounded"
              style={{
                fontFamily: "var(--font-family-body)",
                fontWeight: "400",
                fontSize: "14px",
                backgroundColor: "#0a0908",
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = "#22333b";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = "#0a0908";
                }
              }}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
