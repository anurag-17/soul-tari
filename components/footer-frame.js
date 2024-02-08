import styles from "./footer-frame.module.css";

const FooterFrame = () => {
  return (
    <div className={styles.footerFrame}>
      <div className={styles.logoAndBranding}>
        <h3 className={styles.quickLinks}>Quick Links</h3>
        <div className={styles.homeAboutLocationContainer}>
          <p className={styles.home}>Home</p>
          <p className={styles.about}>About</p>
          <p className={styles.location}>Location</p>
        </div>
      </div>
      <div className={styles.quickMenuFrame}>
        <h3 className={styles.quickMenu}>Quick MENU</h3>
        <div className={styles.chickenTikkaRollContainer}>
          <p className={styles.chickenTikkaRoll}>Chicken Tikka Roll</p>
          <p className={styles.tandooriPaneerTikka}>
            Tandoori Paneer Tikka Roll
          </p>
          <p className={styles.schezwanPaneerMasala}>
            Schezwan Paneer Masala Roll (V)
          </p>
          <p className={styles.malaiChickenTikka}>Malai Chicken Tikka Roll</p>
          <p className={styles.singlesMealDeal}>Single’s Meal Deal</p>
        </div>
      </div>
      <div className={styles.linesVectorGroup}>
        <h3 className={styles.subscribeToOur}>Subscribe to our newsletter</h3>
        <div className={styles.subscribeToOurNewsletterAnParent}>
          <div className={styles.subscribeToOur1}>
            Subscribe to our newsletter and stay updated!
          </div>
          <div className={styles.frameParent}>
            <input
              className={styles.frameChild}
              placeholder="Email"
              type="text"
            />
            <button className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.subscribe}>SUBSCRIBE</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterFrame;
