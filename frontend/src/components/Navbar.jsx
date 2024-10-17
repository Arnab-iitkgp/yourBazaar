import styles from "./Navbar.module.css";
import Searchbar from "./Searchbar";

const Navbar = function () {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h2>YourBAAZAR</h2>
      </div>

      <h3>"Shop Smart, Shop BAZAAR - Quality, Variety, Convenience"</h3>
      <Searchbar />
      <div className={styles.links}>
        <div className={styles.navLinks}>
          <a href="#home">Home</a>
        </div>

        <div className={styles.navBtn}>
          <button className={styles.loginBtn}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
