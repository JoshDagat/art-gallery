import React from "react";
import "./footer.css";

import { Facebook, Instagram, Twitter } from "../../assets";

const Footer = () => {
  return (
    <footer>
      <div className="art-gal__footer section__padding">
        <h1 className="art-gal__footer-logo">
          <a href="#">Modern Art Gallery</a>
        </h1>

        <address className="art-gal__footer__address">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from <time dateTime="08:00">8am</time> to{" "}
          <time dateTime="21:00">9pm</time>. Find us at 99 King Street, Newport,
          USA.
        </address>

        <div className="art-gal__footer__social">
          <a href="#">
            <img src={Facebook} alt="Facebook link" />
          </a>
          <a href="#">
            <img src={Instagram} alt="Instagram link" />
          </a>
          <a href="#">
            <img src={Twitter} alt="Twitter link" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
