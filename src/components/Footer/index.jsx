import styles from "./index.module.scss";
import { ButtonOutline } from "@/components/Button";

export default function Footer() {
    return (
        <footer className={styles.footerGrid}>
            <div className={styles.signupFooter}>
                <h4>SUBSCRIBE TO NEWSLETTER</h4>
                <input type="text" placeholder="Full name" />
                <input type="text" placeholder="Email" />
                <ButtonOutline id={styles.footerButton}>Sign Up</ButtonOutline>
            </div>
            <div className={styles.footerLinks}>
                <h4>QUICK LINKS</h4>
                <li><a href="">Hjem</a></li>
                <li><a href="">Om Os</a></li>
                <li><a href="">Prisliste</a></li>
                <li><a href="">Booking</a></li>
                <li><a href="">Newsletter</a></li>
                <li><a href="">Kontakt</a></li>

                <div className={styles.soMeLinks}>
                    <h4>FOLLOW US</h4>
                    <div className={styles.circleBox}>
                        <div className={styles.footerCircle}></div>
                        <div className={styles.footerCircle}></div>
                        <div className={styles.footerCircle}></div>
                    </div>
                </div>

            </div>
            <div className={styles.footerContact}>
                <h4>FIND US</h4>
                <li><p>WhatsApp</p></li>
                <li><p>+45 23 43 43 43</p></li>
                <li><p>Telefonnummer</p></li>
                <li><p>+45 58 84 84 84</p></li>
                <li><p>Adresse</p></li>
                <li><p>Supergatan 56,</p></li>
                <li><p>Oslo Norway</p></li>
            </div>
        </footer>

    )
};