import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Name, Email, and Message are required.";
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      return "Please enter a valid email.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setSuccess("");
      return;
    }

    // Here you can call an API or backend to store message
    console.log("Form submitted:", form);

    setSuccess("Your message has been sent!");
    setError("");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form
      className="space-y-3 mt-4 bg-gray-50 p-4 rounded shadow-md"
      onSubmit={handleSubmit}
    >
      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}

      <input
        name="name"
        placeholder="Your name"
        className="border p-2 w-full rounded"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Your email"
        className="border p-2 w-full rounded"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Your phone (optional)"
        className="border p-2 w-full rounded"
        value={form.phone}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Your message"
        className="border p-2 w-full rounded"
        rows="4"
        value={form.message}
        onChange={handleChange}
      ></textarea>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
