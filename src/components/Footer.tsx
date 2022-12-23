import { FC } from "react";
import footerLogo from "../assets/images/logo.svg";
import { footerLinks, footerSocials } from "../data/footerLinks";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div>
          <img className="footer__logo" src={footerLogo} alt="Shortly Logo" />
        </div>
        <div className="footer__linkslist">
          {footerLinks?.map(({ title, links }, index) => (
            <section className="footer__links" key={index}>
              <h4 className="footer__linktitle">{title}</h4>
              <div>
                {links?.map(({ name, url }, index) => (
                  <a className="footer__linkitem" key={index} href={url}>
                    {name}
                  </a>
                ))}
              </div>
            </section>
          ))}
          <section className="footer__socials">
            {footerSocials?.map(({ name, icon, url }, idx) => (
              <a
                href={url}
                title={name}
                key={idx}
                rel="noopener noreferrer"
                target="_blank"
              >
                {icon}
              </a>
            ))}
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
