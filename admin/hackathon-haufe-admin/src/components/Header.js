import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className={styles.header}>
      <span>Authenticator</span>
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
}

export default Header;
