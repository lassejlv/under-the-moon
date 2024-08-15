import { ButtonOutline } from "@/components/Button";
import styles from "./index.module.scss";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Siden blev ikke fundet...</p>

      <ButtonOutline onClick={() => window.history.back()}>
        Gå tilbage
      </ButtonOutline>
    </div>
  );
}
