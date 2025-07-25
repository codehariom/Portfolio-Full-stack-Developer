import React, { useRef } from "react";
import emailJs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      alert("Email configuration error. Please contact support.");
      return;
    }

    emailJs
      .sendForm(serviceId, templateId, form.current, { publicKey })
      .then(
        () => {
          alert("Thank you for contacting us! We will get back to you soon.");
          form.current.reset();
        },
        (error) => {
          console.error("Email send failed:", error);
          alert("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-green text-white flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl  tracking-wide font-semibold">Get in touch with us</h2>

        </div>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="grid text-lg">
              <label className="font-semibold mb-1">First Name</label>
              <input
                type="text"
                name="user_firstName"
                placeholder="Enter Your First Name"
                className="p-3 rounded-md border border-white"
                required
              />
            </div>
            <div className="grid text-lg">
              <label className="font-semibold mb-1">Last Name</label>
              <input
                type="text"
                name="user_lastName"
                placeholder="Enter Your Last Name"
                className="p-3 rounded-md border border-white"
                required
              />
            </div>
          </div>
          <div className="grid text-lg">
            <label className="font-semibold mb-1">Email Address</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter Your Email"
              className="p-3 rounded-md border border-white "
              required
            />
          </div>
          <div className="grid text-lg">
            <label className="font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              name="user_phone"
              placeholder="Enter Your Phone Number"
              className="p-3 rounded-md border border-white "
            />
          </div>
          <div className="grid text-lg">
            <label className="font-semibold mb-1">Company Name</label>
            <input
              type="text"
              name="user_message"
              placeholder="Enter Your Company Name"
              className="p-3 rounded-md border border-white "
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-white w-full text-green font-bold py-3 px-8 rounded-md hover:bg-green-100 transition"
            >
              Let's Talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
