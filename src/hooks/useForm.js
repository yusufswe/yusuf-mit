import { useState } from "react";
import { validateField } from "../utils/validation";

export const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(
    Object.keys(initialState).reduce((acc, key) => ({ ...acc, [key]: "" }))
  );
  const [touched, setTouched] = useState(
    Object.keys(initialState).reduce((acc, key) => ({ ...acc, [key]: false }), {})
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, formData[name]);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateForm = () => {
    let tempError = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      tempError[key] = error;
      if (error) isValid = false;
    });

    setErrors(tempError);
    return isValid;
  };

  const resetForm = () => {
    setFormData(initialState);
    setTouched(Object.keys(initialState).reduce((acc, key) => ({ ...acc, [key]: false }), {}));
    setErrors(Object.keys(initialState).reduce((acc, key) => ({ ...acc, [key]: "" }), {}));
    setSubmitStatus({ success: false, message: "" });
  };
  return {
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
  };
};
