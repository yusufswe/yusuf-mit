// components/FormField.jsx
import React from "react";

const baseInputStyles = `w-full border-2 border-white px-4 py-2 rounded-md bg-white/10 border
  text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30`;

export const TextInput = ({ error, touched, ...props }) => (
  <input
    className={`${baseInputStyles} ${touched && error ? "border-red-500" : "border-white/20"}`}
    {...props}
  />
);

export const SelectInput = ({ options, error, touched, ...props }) => (
  <select
    className={`${baseInputStyles} ${
      touched && error ? "border-red-500" : "border-white/20"
    } text-white/90`}
    {...props}
  >
    {options.map(({ value, label }) => (
      <option key={value} value={value} className="bg-[#663399]">
        {label}
      </option>
    ))}
  </select>
);

export const TextArea = ({ error, touched, ...props }) => (
  <textarea
    className={`${baseInputStyles} ${
      touched && error ? "border-red-500" : "border-white/20"
    } resize-none`}
    {...props}
  />
);

export const FormField = ({ label, error, touched, type = "text", ...props }) => {
  const renderInput = () => {
    switch (type) {
      case "textarea":
        return <TextArea error={error} touched={touched} {...props} />;
      case "select":
        return <SelectInput error={error} touched={touched} {...props} />;
      default:
        return <TextInput type={type} error={error} touched={touched} {...props} />;
    }
  };

  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium text-white/90">{label}</label>}
      {renderInput()}
      {touched && error && <p className="text-red-300 text-sm">{error}</p>}
    </div>
  );
};

export const SubmitButton = ({ isSubmitting, children }) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className={`w-full bg-[#7A4BAF] text-white py-2 px-4 rounded-md font-medium ${
      isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-white/90 hover:text-[#663399]"
    } transition-colors`}
  >
    {children}
  </button>
);

export const StatusMessage = ({ status }) => (
  <>
    {status.message && (
      <div className={`p-3 rounded-md ${status.success ? "bg-green-500/20" : "bg-red-500/20"}`}>
        <p className="text-sm text-center text-white">{status.message}</p>
      </div>
    )}
  </>
);
