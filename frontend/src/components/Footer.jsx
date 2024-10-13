import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Arnab Chakraborty. All rights reserved.</p>
      <ul className={styles.footerLinks}>
        <li><a href="">Privacy Policy</a></li>
        <li><a href="">Terms of Service</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
