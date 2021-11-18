import { Link } from "react-router-dom";
import Button from "./Button";

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to="/">
        <Button text="Go back" color="#00aeff" />
      </Link>
    </div>
  );
};

export default About;
