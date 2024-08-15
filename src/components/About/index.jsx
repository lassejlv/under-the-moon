import styles from "./index.module.scss";
import { ButtonOutline } from "@/components/Button";

export default function About() {
  return (
    <>
      <div className={styles.about}>
        <h1>Under The Moon - New Style</h1>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
          placeat vitae. Facere temporibus, nostrum ab in eligendi tenetur
          suscipit iusto maxime distinctio, quo vero blanditiis alias commodi
          eum qui est. Beatae quos consequuntur corrupti, totam corporis vel
          ipsum eum explicabo a maiores veniam provident quae aliquid facilis
          nulla exercitationem magnam dignissimos assumenda sunt deserunt in.
          Corporis quas minus dolorem mollitia? Sed vitae provident nam
          distinctio impedit ab fugiat, placeat architecto assumenda molestiae
          rem quos itaque iure illo dolor et culpa dolorum asperiores aliquid
          veniam veritatis? At illo expedita dignissimos blanditiis.
        </p>

        <div className={styles.bottom}>
          <ButtonOutline>LÆSE MERE</ButtonOutline>
        </div>
      </div>

      {/* _____________________________ */}
      <section className={styles.sectionAbout}>
        <div className={styles.about}>
          <h1>One 2 One</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
            placeat vitae. Facere temporibus, nostrum ab in eligendi tenetur
            suscipit iusto maxime distinctio, quo vero blanditiis alias commodi
            eum qui est. Beatae quos consequuntur corrupti, totam corporis vel
            ipsum eum explicabo.
          </p>

          <div className={styles.bookButton}>
            <ButtonOutline className={styles.aboutButton}>BOOK TID</ButtonOutline>
          </div>
        </div>


        {/* _____________________________ */}
        <div className={styles.about}>
          <h1>Loyalty Free</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
            placeat vitae. Facere temporibus, nostrum ab in eligendi tenetur
            suscipit iusto maxime distinctio, quo vero blanditiis alias commodi
            eum qui est. Beatae quos consequuntur corrupti, totam corporis vel
            ipsum eum explicabo.
          </p>

          <div className={styles.bottom}>
            <ButtonOutline className={styles.aboutButton}>LÆSE MERE</ButtonOutline>
          </div>
        </div>
      </section>
    </>
  );
}
