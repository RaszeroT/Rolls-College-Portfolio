import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const socialIcons = {
    githubIcon: faGithub,
    linkedinIcon: faLinkedin,
    instagramIcon: faInstagram,
  };

  return (
    <footer>
      <div id="footer-nav">
        <h2 id="socials" className="quintessential">
          Royce Thomas-Quintana
        </h2>
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={socialIcons.linkedinIcon} />
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={socialIcons.instagramIcon} />
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="designs">
        <p>
          <span className="copy">
            &copy;2024{" "}
            <a href="https://www.shanhun-codes.com">Shanhun-codes.com</a>
            <br />
          </span>{" "}
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
