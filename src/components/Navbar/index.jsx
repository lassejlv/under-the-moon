import styles from "./index.module.scss";

export default function Navbar() {
  /**
   * @type {Array<{label: string, url: string}>} - Array of items to be displayed in the navbar
   */
  const items = [
    {
      label: "HJEM",
      url: "/",
    },
    {
      label: "KONCEPTER",
      url: "/koncepter",
    },
    {
      label: "UTMLOYALTY",
      url: "/utmloyalty",
    },
    {
      label: "OM",
      url: "/om",
    },
    {
      label: "KONTAKT",
      url: "/kontakt",
    },
  ];

  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          {items.map((item) => (
            <li key={item.label}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
