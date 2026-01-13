// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Fitwi.G</span>
        <span>Built with React · Designed by me</span>
      </div>
    </footer>
  );
};

export default Footer;
