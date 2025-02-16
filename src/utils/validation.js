export const validateField = (name, value) => {
  switch (name) {
    case "name":
      if (!value.trim()) return "Nama wajib diisi";
      return "";
    case "email":
      const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) return "Email wajib diisi";
      if (!emailValidation.test(value)) return "Email tidak valid";
      return "";
    case "enquiry":
      if (!value) return "Pilih salah satu jenis pertanyaan";
      return "";
    case "message":
      if (!value.trim()) return "Pesan wajib diisi";
      return "";
    default:
      return "";
  }
};
