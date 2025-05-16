import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_934ubzi", "template_vldpfvp", form.current, {
        publicKey: "C0B3tYhh8Bjqs5jXR",
      })
      .then(
        () => {
          setSuccess(true);
          toast.success("Mail Sent");
          form.current.reset();
        },
        (error) => {
          setError(true);
          toast.error("Error sending mail");
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        className="flex flex-col max-w-[600px] w-full"
        id="demo_form"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-300 text-gray-300">
            Contact
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          required
          name="name"
          style={{ borderRadius: "4px" }}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          required
          name="email"
          style={{ borderRadius: "4px" }}
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="8"
          required
          placeholder="Message"
          style={{ borderRadius: "4px" }}
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 hover:bg-cyan-300 hover:border-cyan-300 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
