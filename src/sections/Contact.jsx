import React from "react";
import { motion } from "framer-motion";
import { useForm } from "../hooks/useForm";
import { FormField, StatusMessage, SubmitButton } from "../components/FormField";

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  enquiry: "",
  message: "",
};

const ENQUIRY_OPTIONS = [
  { value: "", label: "Type of enquiry" },
  { value: "project", label: "Freelance project proposal" },
  { value: "opportunity", label: "Job opportunity" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const {
    formData,
    errors,
    touched,
    isSubmitting,
    submitStatus,
    setIsSubmitting,
    setSubmitStatus,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
  } = useForm(INITIAL_FORM_STATE);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setSubmitStatus({
          success: true,
          message: "Terimakasih atas pesan anda.",
        });

        setTimeout(() => {
          resetForm();
        }, 2000);
      } catch (error) {
        setSubmitStatus({
          success: false,
          message: "Terjadi kesalahan. Silahkan coba lagi",
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      const firstError = Object.keys(formData).find((key) => errors[key]);
      if (firstError) {
        const element = document.querySelector(`[name="${firstError}"]`);
        if (element) element.focus();
      }
    }
  };

  return (
    <section className="container mx-auto bg-[#663399] text-white py-16 px-4" id="contact">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8">Contact me</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormField
              label="Name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
              touched={touched.name}
            />

            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
            />

            <FormField
              label="Type of Enquiry"
              name="enquiry"
              type="select"
              options={ENQUIRY_OPTIONS}
              value={formData.enquiry}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.enquiry}
              touched={touched.enquiry}
            />

            <FormField
              label="Message"
              name="message"
              type="textarea"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.message}
              touched={touched.message}
            />

            <StatusMessage status={submitStatus} />

            <SubmitButton isSubmitting={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </SubmitButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
