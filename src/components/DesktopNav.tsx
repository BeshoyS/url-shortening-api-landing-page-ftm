import { FC } from "react";
import Button from "./Button";


const DesktopNav: FC = () => {
  return (
    <nav className="desktop-nav">
      <ul className="desktop-primary-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Resourses
          </a>
        </li>
      </ul>
      <ul className="desktop-secondary-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Login
          </a>
        </li>
        <li className="nav-item">
          <Button title="Sign Up" />
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
