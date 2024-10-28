"use client";

import { useState } from "react";
import styles from "./burgerMenu.module.scss";
import Image from "next/image";
import burgerMenu from "@/assets/images/burgerMenu.png";
import x from "@/assets/images/x.png";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <div className={styles.burgerMenu}>
      {isOpen ? (
        <Image
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
          src={x}
          alt="menu"
          width={34}
          height={34}
        />
      ) : (
        <Image
          className={styles.menuButton}
          onClick={() => setIsOpen(true)}
          src={burgerMenu}
          alt="menu"
          width={34}
          height={34}
        />
      )}

      {isOpen && (
        <div className={styles.menuOverlay}>
          <nav className={styles.menuNav}>
            <a href="#interior">Interior</a>
            <a href="#about">About Us</a>
            <a href="#menu">Menu</a>
            <a href="#contacts">Contacts</a>
          </nav>
          <div className={styles.languageSwitcher}>
            <span>EN</span>
            <span>RU</span>
            <span>KG</span>
          </div>
        </div>
      )}
    </div>
  );
}
