import styles from "./btnSci.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function BtnSci() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <a
        href="https://github.com/Maryna-Khrystyianyn"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btnLink}
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="text-[1.5rem] text-[var(--muted)]"
        />
      </a>
      <a
        href="https://www.instagram.com/marinasvitlana/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btnLink}
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-[1.5rem] text-[var(--muted)]"
        />
      </a>
      <a
        href="https://www.facebook.com/people/Maryna-Khrystyianyn/pfbid0sWom4NEiSokMwP9DHtNpaYeSuyRdpDaYLimnPrHqsUfT9SAedvb4b6MLCVZCwnYil/?sk=photos_by"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btnLink}
      >
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-[1.5rem] text-[var(--muted)]"
        />
      </a>
    </div>
  );
}
