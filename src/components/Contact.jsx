import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState(""); // For success/error messages
  const [errorMessage, setErrorMessage] = useState(""); // For validation error message

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission

    // Validation: Ensure all fields are filled
    if (!name || !email || !message) {
      setErrorMessage("Please fill in all fields.");
      setStatusMessage(""); // Clear any previous success message
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      // Send the email using EmailJS
      await emailjs.send(
        "service_yxi6i3a", // Replace with your service ID
        "template_mxtnxdt", // Replace with your template ID
        templateParams,
        "1M7uR3ocUiy1n0acu" // Replace with your user ID
      );

      // On success, show success message and clear form fields
      setStatusMessage("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setErrorMessage(""); // Clear any error message
    } catch (error) {
      // On error, show error message
      setStatusMessage("Failed to send message. Please try again.");
      console.error("Error sending email:", error);
    }
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
        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-field">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              placeholder="Tell me a bit about what you're looking for..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {/* Submit Button */}
          <button type="submit" className="btn-primary">
            <FiMail size={16} />
            <span>Send message</span>
          </button>
        </form>

        {/* Display success/error messages */}
        {statusMessage && (
          <div
            className={`status-message ${
              statusMessage.includes("success") ? "success" : "error"
            }`}
          >
            {statusMessage}
          </div>
        )}

        {/* Display validation error message */}
        {errorMessage && (
          <div className="status-message error">{errorMessage}</div>
        )}

        {/* Contact Info */}
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
              href="https://github.com/fitwi-Gebray"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FiGithub size={15} />
              <span>github.com/fitwi-Gebray</span>
            </a>
            <a
              href="https://linkedin.com/in/fitwi-Gebray"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <FiLinkedin size={15} />
              <span>linkedin.com/in/fitwi-Gebray</span>
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
