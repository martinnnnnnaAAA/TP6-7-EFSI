"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from './NavBar.module.css'; 

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" style={{ color: 'white', fontWeight: 'normal', textDecoration: 'none' }}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href={"/quienes-somos"} style={{ color: 'white', fontWeight: 'normal', textDecoration: 'none' }}>Quienes Somos</Link>
        </li>
        <li className={styles.navItem}>
          <Link href={`/reservas`} style={{ color: 'white', fontWeight: 'normal', textDecoration: 'none' }}>Reservas</Link>
        </li>
        <li className={styles.navItem}>
          <Link href={`/contacto`} style={{ color: 'white', fontWeight: 'normal', textDecoration: 'none' }}>Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
