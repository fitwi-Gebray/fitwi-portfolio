import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      user_name: formRef.current.user_name.value,
      user_email: formRef.current.user_email.value,
      message: formRef.current.message.value,
    };

    emailjs
      .send(
        "service_yxi6i3a",
        "template_mxtnxdt",
        templateParams,
        "1M7uR3ocUiy1n0acu"
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <div className="section-inner">
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

          <button type="submit" className="btn-primary">
            <FiMail size={16} />
            <span>{status === "sending" ? "Sending..." : "Send message"}</span>
          </button>

          {status === "success" && (
            <p className="success-msg">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="error-msg">Something went wrong. Try again.</p>
          )}
        </form>

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
              href="https://github.com/fitwigebray8"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FiGithub size={15} />
              <span>github.com/fitwigebray8</span>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FiLinkedin size={15} />
              <span>linkedin.com/in/yourusername</span>
            </a>
          </div>

          <p>
            If you like this portfolio, I&apos;m happy to walk you through how I
            built it during an interview, including structure and decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
