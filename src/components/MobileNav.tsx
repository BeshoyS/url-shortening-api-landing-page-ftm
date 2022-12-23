import { FC, useState } from "react";
import { HiMenu } from "react-icons/hi";
import Button from "./Button";


const MobileNav: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="mobile-nav">
      <HiMenu className="hamburger-nav" onClick={openMenu} />
      {isOpen && (
        <div className="mobile-nav-list">
          <ul className="mobile-primary-nav">
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
          <ul className="mobile-secondary-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <Button title="Sign Up" styles="w-100" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
