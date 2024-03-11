import Link from "next/link";
import React from "react";
import styles from "../styles/layout.module.css";

const FixedFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerlinks}>
        <ul className={styles.footerlist}>
          <li className={styles.listitem}>Categories</li>
          <li className={styles.listitem}>Teach on Learning Gate</li>
        </ul>
        <ul className={styles.footerlist}>
          <li className={styles.listitem}>Investor</li>
          <li className={styles.listitem}>Help & Support</li>
        </ul>
        <ul className={styles.footerlist}>
          <li className={styles.listitem}>Contact Us</li>
          <li className={styles.listitem}>Terms & Privacy policy</li>
        </ul>
      </div>
      <div className={styles.copyright}>
        <div className={styles.logo}>
          <Link href="/">Logo</Link>
        </div>
        <div className={styles.copyrighttext}>
          Learning Gate ©{new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default FixedFooter;
