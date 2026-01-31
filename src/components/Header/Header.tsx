import type {ReactElement} from "react";

import styles from "./Header.module.css";

export default function Header(): ReactElement {
  return (
      <header className={styles.header}>
        <img className="logo" src="/assets/logos/Logo.png" alt="swiftlogixtestwebstorm logo"/>
        <nav>
          <ul>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Home</a>
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
        <div className="actions">
          <button>Login</button>
          <button>Sing up</button>
        </div>
      </header>
  );
};