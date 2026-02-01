import { useState, useActionState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiGithub, FiLinkedin, FiRotateCcw } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  const [msgLength, setMsgLength] = useState(0);
  const MAX_CHARS = 500;

  async function handleEmailAction(prevState, formData) {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      message: formData.get("message"),
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      return {
        success: true,
        text: "Message sent successfully!",
        timestamp: Date.now(),
      };
    } catch (error) {
      console.error("EmailJS Error:", error);

      return {
        success: false,
        text: "Something went wrong. Please try again.",
        timestamp: Date.now(),
      };
    }
  }

  // --- INITIALIZE ACTION STATE ---
  const [state, formAction, isPending] = useActionState(handleEmailAction, {
    success: null,
    text: "",
  });

  // --- AUTO-HIDE FEEDBACK ---
  const [showFeedback, setShowFeedback] = useState(false);
  useEffect(() => {
    if (state.text) {
      setShowFeedback(true);
      const timer = setTimeout(() => setShowFeedback(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state.timestamp]);

  // --- RESET MESSAGE COUNTER ON SUCCESS ---
  useEffect(() => {
    if (state.success) {
      setMsgLength(0);
    }
  }, [state.success]);

  return (
    <div className="section-inner">
      <div className="section-header">
        <div>
          <div className="section-badge">Next step</div>
          <h2 className="section-title">Contact</h2>
        </div>
        <p className="section-description">
          Interested in working together? Feel free to reach out.
        </p>
      </div>

      <div className="contact-grid">
        <form action={formAction} className="contact-form">
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label className="form-label">Message</label>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: msgLength >= MAX_CHARS ? "red" : "gray",
                }}
              >
                {msgLength} / {MAX_CHARS}
              </span>
            </div>

            <textarea
              className="form-textarea"
              name="message"
              placeholder="Tell me about your project..."
              maxLength={MAX_CHARS}
              onChange={(e) => setMsgLength(e.target.value.length)}
              required
            />
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <button type="submit" className="btn-primary" disabled={isPending}>
              <FiMail size={16} />
              <span>{isPending ? "Sending..." : "Send message"}</span>
            </button>

            <button
              type="reset"
              className="btn-secondary"
              onClick={() => setMsgLength(0)}
              disabled={isPending}
            >
              <FiRotateCcw size={16} />
              <span>Clear</span>
            </button>
          </div>

          {showFeedback && (
            <p className={state.success ? "success-msg" : "error-msg"}>
              {state.text}
            </p>
          )}
        </form>

        <div className="contact-info">
          <div className="contact-pill">Let's connect</div>

          <div className="contact-links">
            <a href="mailto:fitwigebray8@gmail.com" className="contact-link">
              <FiMail size={18} />
              <span>fitwigebray8@gmail.com</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FiGithub size={18} />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FiLinkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
