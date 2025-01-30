import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <h1>WELCOME TO MY PAGE</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> | <Link to="/page">Page</Link> |{" "}
        <Link to="/projects">Projects</Link>
      </nav>
    </>
  );
};
