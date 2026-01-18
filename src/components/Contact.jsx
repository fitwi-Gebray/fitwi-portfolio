import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const sendEmail = (e) => {
    e.preventDefault();

    // 1. Prevent multiple submissions if already sending
    if (status === "sending") return;

    setStatus("sending");

    // 2. Map form values to template parameters
    const templateParams = {
      user_name: formRef.current.user_name.value,
      user_email: formRef.current.user_email.value,
      message: formRef.current.message.value,
    };

    // 3. Access environment variables for security
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      () => {
        setStatus("success");
        formRef.current.reset();

        // 4. Reset UI message after 5 seconds
        setTimeout(() => setStatus(""), 5000);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");

        // Reset error status so user can try again
        setTimeout(() => setStatus(""), 5000);
      }
    );
  };

  return (
    <div className="section-inner">
      {/* --- HEADER SECTION --- */}
      <div className="section-header">
        <div>
          <div className="section-badge">Next step</div>
          <h2 className="section-title">Contact</h2>
        </div>
        <p className="section-description">
          Interested in working together or have a question? Feel free to reach
          out — I&apos;ll respond as soon as I can.
        </p>
      </div>

      <div className="contact-grid">
        {/* --- FORM SECTION --- */}
        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Name</label>
              <input
                className="form-input"
                type="text"
                name="user_name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                name="user_email"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              name="message"
              placeholder="Tell me a bit about what you're looking for..."
              required
            />
          </div>

          {/* IMPROVEMENT: Button is visually and functionally disabled during sending */}
          <button
            type="submit"
            className="btn-primary"
            disabled={status === "sending"}
          >
            <FiMail size={16} />
            <span>{status === "sending" ? "Sending..." : "Send message"}</span>
          </button>

          {/* Feedback Messages */}
          {status === "success" && (
            <p className="success-msg">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="error-msg">Something went wrong. Try again.</p>
          )}
        </form>

        {/* --- SIDEBAR INFO SECTION --- */}
        <div className="contact-info">
          <div className="contact-pill">Let&apos;s connect</div>
          <p>
            The fastest way to reach me is by email, but you can also find me on
            GitHub and LinkedIn.
          </p>

          <div className="contact-links">
            <a href="mailto:fitwigebray8@gmail.com" className="contact-link">
              <FiMail size={15} />
              <span>fitwigebray8@gmail.com</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FiGithub size={15} />
              <span>://github.com</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FiLinkedin size={15} />
              <span>://linkedin.com</span>
            </a>
          </div>

          <p className="contact-footer-note">
            If you like this portfolio, I&apos;m happy to walk you through how I
            built it during an interview, including structure and decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
