import styles from "./index.module.scss";

export default function Gallery() {
  return (
    <>
    <header className={styles.galleryHeader}><h1>FOLLOW US ON INSTAGRAM</h1></header>
    
    <div className={styles.galleryGrid}>
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className={styles.galleryItem}>
          <img
            src={`/gallery/image${index + 1}.jpeg`}
            alt={`Gallery item ${index + 1}`}
          />
        </div>
      ))}
    </div></>
  );
}
