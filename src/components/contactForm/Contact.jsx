const ContactForm = () => {
  return (
    <form className="space-y-2 mt-4">
      <input placeholder="Your name" className="border p-2 w-full" />
      <input placeholder="Your email" className="border p-2 w-full" />
      <textarea placeholder="Message" className="border p-2 w-full"></textarea>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
};

export default ContactForm;