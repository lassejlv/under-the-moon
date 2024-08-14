import styles from "./index.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Under the moon</h1>

      <div className={styles.bottomCard}>
        <h1>HAIRSTYLIST OG FRISØR</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime minus
          quae labore a ut, tempore tempora eius magni esse hic voluptatum.
          Tempora necessitatibus molestias quisquam eius deserunt facilis
          voluptates eum.
        </p>
      </div>
    </header>
  );
}
