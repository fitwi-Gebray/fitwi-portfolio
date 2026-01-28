// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { FiMail, FiGithub, FiLinkedin, FiRotateCcw } from "react-icons/fi";

// const Contact = () => {
//   const formRef = useRef();
//   const [status, setStatus] = useState(""); // "", "sending", "success", "error"
//   const [message, setMessage] = useState(""); // Tracked for real-time character counter
//   const MAX_CHARS = 500;

//   // Function to clear all fields and status
//   const handleClear = () => {
//     formRef.current.reset();
//     setMessage("");
//     setStatus("");
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // 1. Prevent multiple submissions if already sending
//     if (status === "sending") return;

//     setStatus("sending");

//     // 2. Map form values to template parameters
//     const templateParams = {
//       user_name: formRef.current.user_name.value,
//       user_email: formRef.current.user_email.value,
//       message: message, // Uses the state value
//     };

//     // 3. Access environment variables for security (Vite 2026 standard)
//     const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//     const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
//     const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

//     emailjs.send(serviceId, templateId, templateParams, publicKey).then(
//       () => {
//         setStatus("success");
//         handleClear(); // Clear form on success

//         // Reset UI message after 5 seconds
//         setTimeout(() => setStatus(""), 5000);
//       },
//       (error) => {
//         console.error("EmailJS Error:", error);
//         setStatus("error");

//         // Reset error status so user can try again
//         setTimeout(() => setStatus(""), 5000);
//       }
//     );
//   };

//   return (
//     <div className="section-inner">
//       <div className="section-header">
//         <div>
//           <div className="section-badge">Next step</div>
//           <h2 className="section-title">Contact</h2>
//         </div>
//         <p className="section-description">
//           Interested in working together? Feel free to reach out — I&apos;ll
//           respond as soon as I can.
//         </p>
//       </div>

//       <div className="contact-grid">
//         <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
//           <div className="form-row">
//             <div className="form-field">
//               <label className="form-label">Name</label>
//               <input
//                 className="form-input"
//                 type="text"
//                 name="user_name"
//                 placeholder="Your name"
//                 required
//               />
//             </div>
//             <div className="form-field">
//               <label className="form-label">Email</label>
//               <input
//                 className="form-input"
//                 type="email"
//                 name="user_email"
//                 placeholder="you@example.com"
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-field">
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <label className="form-label">Message</label>
//               {/* --- CHARACTER COUNTER --- */}
//               <span
//                 style={{
//                   fontSize: "0.8rem",
//                   color: message.length >= MAX_CHARS ? "red" : "gray",
//                 }}
//               >
//                 {message.length} / {MAX_CHARS}
//               </span>
//             </div>
//             <textarea
//               className="form-textarea"
//               name="message"
//               placeholder="Tell me a bit about what you're looking for..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               maxLength={MAX_CHARS}
//               required
//             />
//           </div>

//           <div style={{ display: "flex", gap: "1rem" }}>
//             <button
//               type="submit"
//               className="btn-primary"
//               disabled={status === "sending"}
//             >
//               <FiMail size={16} />
//               <span>
//                 {status === "sending" ? "Sending..." : "Send message"}
//               </span>
//             </button>

//             {/* --- CLEAR BUTTON --- */}
//             <button
//               type="button"
//               className="btn-secondary"
//               onClick={handleClear}
//               disabled={status === "sending"}
//               style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
//             >
//               <FiRotateCcw size={16} />
//               <span>Clear</span>
//             </button>
//           </div>

//           {status === "success" && (
//             <p className="success-msg">Message sent successfully!</p>
//           )}
//           {status === "error" && (
//             <p className="error-msg">Something went wrong. Try again.</p>
//           )}
//         </form>

//         <div className="contact-info">
//           <div className="contact-pill">Let&apos;s connect</div>
//           <div className="contact-links">
//             <a href="mailto:fitwigebray8@gmail.com" className="contact-link">
//               <FiMail size={15} />
//               <span>fitwigebray8@gmail.com</span>
//             </a>
//             <a
//               href="https://github.com"
//               target="_blank"
//               rel="noreferrer"
//               className="contact-link"
//             >
//               <FiGithub size={15} />
//               <span>://github.com</span>
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noreferrer"
//               className="contact-link"
//             >
//               <FiLinkedin size={15} />
//               <span>://linkedin.com</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import { useState, useActionState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiGithub, FiLinkedin, FiRotateCcw } from "react-icons/fi";

const Contact = () => {
  const [msgLength, setMsgLength] = useState(0);
  const MAX_CHARS = 500;

  // --- REACT 19 ACTION FUNCTION (PURE) ---
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
  }, [state.text]);

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
