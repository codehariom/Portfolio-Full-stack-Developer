import React, { useRef } from "react";
import emailJs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // // Log form data and environment variables for debugging
    // const formData = new FormData(form.current);
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
    // console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    // console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    // console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    // Check if environment variables are defined
    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      console.error("Environment variables are missing!");
      alert("Configuration error. Please contact support.");
      return;
    }

    emailJs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert(
            "Thank you for joining us! We've sent a welcome email to get you started."
          );
          form.current.reset(); // Clear the form after successful submission
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="h-screen bg-green text-white place-items-center place-content-center">
      <div className="grid mt-10">
        <div className="font-semibold justify-center text-center m-10">
          <h2 className="text-4xl">
            Contact Us <br /> Get in touch with us
          </h2>
        </div>
        <div className="w-fit">
          <form ref={form} onSubmit={sendEmail}>
            <div className="py-2">
              <div className="flex gap-20 w-full">
                <div className="grid text-xl">
                  <label className="font-semibold py-2">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your First Name"
                    name="user_firstName"
                    className="border-1 py-2 px-4 rounded-md outline-offset-4 outline-green"
                    required
                  />
                </div>
                <div className="grid text-xl">
                  <label className="font-semibold py-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    name="user_lastName"
                    className="border-1 py-2 px-4 rounded-md outline-offset-4 outline-green"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="grid text-xl">
                <label className="font-semibold py-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="user_email"
                  className="border-1 py-2 px-4 rounded-md outline-offset-4 outline-green"
                  required
                />
              </div>
              <div className="grid text-xl">
                <label className="font-semibold py-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  name="user_phone"
                  className="border-1 py-2 px-4 rounded-md outline-offset-4 outline-green"
                />
              </div>
              <div className="grid text-xl">
                <label className="font-semibold py-2">Company Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Company Name"
                  name="user_message"
                  className="border-1 py-2 px-4 rounded-md outline-offset-4 outline-green"
                />
              </div>
            </div>
            <input
              type="submit"
              value="Let's Talk"
              className="bg-white text-green py-2 px-6 rounded-md outline-2 my-6 outline-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;