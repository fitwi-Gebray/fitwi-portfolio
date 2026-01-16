import React, { useState } from "react";
import { Grid, TextField, Button, Alert } from "@mui/material"; // Import MUI components
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

      <Grid container spacing={3}>
        {/* Left Section: Contact Form */}
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Message"
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "20px" }}
            >
              Send Message
            </Button>

            {/* Display success/error messages within contact form */}
            {(statusMessage || errorMessage) && (
              <Alert
                severity={statusMessage ? "success" : "error"}
                style={{ marginTop: "15px" }}
              >
                {statusMessage || errorMessage}
              </Alert>
            )}
          </form>
        </Grid>

        {/* Right Section: Contact Info */}
        <Grid item xs={12} md={6}>
          <div className="contact-info">
            <div className="contact-pill">Let&apos;s connect</div>
            <p>
              The fastest way to reach me is by email, but you can also find me
              on GitHub and LinkedIn.
            </p>

            <div className="contact-links">
              <a href="mailto:fitwigebray8@gmail.com" className="contact-link">
                <FiMail size={20} />
                <span>fitwigebray8@gmail.com</span>
              </a>
              <a
                href="https://github.com/fitwi-Gebray"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <FiGithub size={20} />
                <span>github.com/fitwi-Gebray</span>
              </a>
              <a
                href="https://linkedin.com/in/fitwi-Gebray"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <FiLinkedin size={20} />
                <span>linkedin.com/in/fitwi-Gebray</span>
              </a>
            </div>

            <p>
              If you like this portfolio, I&apos;m happy to walk you through how
              I built it during an interview, including structure and decisions.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
