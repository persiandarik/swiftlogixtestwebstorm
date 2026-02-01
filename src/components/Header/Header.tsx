import type {ReactElement} from "react";

import styles from "./Header.module.css";
import Button, {Variant} from "../Button/Button.tsx";

export default function Header(): ReactElement {
  return (
      <header className={styles.header}>
        <img
            className={styles.logo}
            src="/assets/logos/Logo.png"
            alt="Swiftlogix Logo"
        />
        <nav>
          <ul>
            <li>
              <a href="#" className={styles.active}>
                Home
              </a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Track Shipment</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <Button>Log In</Button>
          <Button variant={Variant.OUTLINE}>Sign Up</Button>
        </div>
      </header>
  );
}
