import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      Copyright &copy; {new Date().getFullYear()} Ommies by Valerie Komova
    </footer>
  );
};

export default Footer;
