import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import emailjs from "emailjs-com"; // Make sure you have emailjs-com installed

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // EmailJS service
    emailjs
      .send(
        "service_yxi6i3a",
        "template_mxtnxdt",
        templateParams,
        "1M7uR3ocUiy1n0acu"
      )
      .then(
        () => {
          alert("Message sent successfully!");

          // Clear the form fields
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
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
          <button type="submit" className="btn-primary">
            <FiMail size={16} />
            <span>Send message</span>
          </button>
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
