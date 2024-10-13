import styles from './Homepage.module.css';

const Homepage = () => {
  return (
    <main className={styles.home}>
      <section className={styles.heroSection}>
        <h1>Welcome to YourBazaar</h1>
        <p>Your one-stop Store for amazing products!</p>
        <button className={styles.shopNowBtn}>Shop Now</button>
      </section>
    </main>
  );
};


export default Homepage