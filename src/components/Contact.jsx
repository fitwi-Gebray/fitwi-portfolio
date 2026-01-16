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
    <div
      style={{
        padding: "30px",
        backgroundColor: "#E3F2FD", // Light blue background
        borderRadius: "8px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            marginBottom: "10px",
            fontWeight: "bold",
            fontSize: "18px",
            color: "#1E88E5",
          }}
        >
          Next step
        </div>
        <h2
          style={{ fontSize: "32px", marginBottom: "10px", color: "#1E88E5" }}
        >
          Contact
        </h2>
        <p style={{ color: "#555", fontSize: "16px" }}>
          Interested in working together or have a question? Feel free to reach
          out — I&apos;ll respond as soon as I can.
        </p>
      </div>

      <Grid container spacing={3}>
        {/* Left Section: Contact Form */}
        <Grid item xs={12} md={6}>
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  marginBottom: "15px",
                  borderColor: "#42A5F5", // Light blue border color
                }}
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  marginBottom: "15px",
                  borderColor: "#42A5F5",
                }}
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
                sx={{
                  marginBottom: "15px",
                  borderColor: "#42A5F5",
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  backgroundColor: "#1E88E5", // Blue button color
                  color: "#ffffff",
                  marginTop: "20px",
                  "&:hover": {
                    backgroundColor: "#1976D2", // Darker blue on hover
                  },
                }}
              >
                Send Message
              </Button>

              {/* Display success/error messages within contact form */}
              {(statusMessage || errorMessage) && (
                <Alert
                  severity={statusMessage ? "success" : "error"}
                  style={{
                    marginTop: "15px",
                    backgroundColor: statusMessage ? "#C8E6C9" : "#FFCDD2",
                  }}
                >
                  {statusMessage || errorMessage}
                </Alert>
              )}
            </form>
          </div>
        </Grid>

        {/* Right Section: Contact Info */}
        <Grid item xs={12} md={6}>
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                backgroundColor: "#BBDEFB", // Light blue background for the pill
                padding: "10px",
                borderRadius: "4px",
                fontWeight: "bold",
                marginBottom: "10px",
                color: "#1E88E5",
              }}
            >
              Let&apos;s connect
            </div>
            <p
              style={{ fontSize: "16px", marginBottom: "20px", color: "#555" }}
            >
              The fastest way to reach me is by email, but you can also find me
              on GitHub and LinkedIn.
            </p>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <a
                href="mailto:fitwigebray8@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#1E88E5", // Dark blue links
                  margin: "10px 0",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                <FiMail size={20} style={{ marginRight: "10px" }} />
                <span>fitwigebray8@gmail.com</span>
              </a>
              <a
                href="https://github.com/fitwi-Gebray"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#1E88E5",
                  margin: "10px 0",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                <FiGithub size={20} style={{ marginRight: "10px" }} />
                <span>github.com/fitwi-Gebray</span>
              </a>
              <a
                href="https://linkedin.com/in/fitwi-gebray-teklemichael"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#1E88E5",
                  margin: "10px 0",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                <FiLinkedin size={20} style={{ marginRight: "10px" }} />
                <span>linkedin.com/in/fitwi-gebray-teklemichael</span>
              </a>
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
                  marginBottom: "20px",
                }}
              >
                If you're interested in learning more about how I built this
                portfolio, including the structure and the key decisions behind
                it, I'd be happy to walk you through the process during an
                interview or detailed discussion.
              </p>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    color: "#555",
                    marginBottom: "10px",
                  }}
                >
                  Let’s chat and explore how I can contribute to your team!
                </p>

                <a
                  href="mailto:fitwigebray8@gmail.com"
                  style={{
                    display: "inline-block",
                    padding: "12px 30px",
                    backgroundColor: "#1E88E5",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "5px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    margin: "10px",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#1976D2")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#1E88E5")
                  }
                >
                  Reach Out via Email
                </a>

                <p
                  style={{ fontSize: "14px", color: "#888", marginTop: "10px" }}
                >
                  Or connect with me on
                  <a
                    href="https://www.linkedin.com/in/fitwi-gebray-teklemichael-4aa1a02a4/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: "5px", color: "#1E88E5" }}
                  >
                    LinkedIn
                  </a>
                  or view my projects on
                  <a
                    href="https://github.com/fitwi-Gebray"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: "5px", color: "#1E88E5" }}
                  >
                    GitHub
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
