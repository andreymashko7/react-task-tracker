import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>

      <Link to="/about" className="link-about">
        About
      </Link>
    </footer>
  );
};

export default Footer;
