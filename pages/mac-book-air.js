import LineFrame from "../components/line-frame";
import DeliveryInfo from "../components/delivery-info";
import HeaderLogoFrame from "../components/header-logo-frame";
import Rectangle from "../components/rectangle";
import Text1 from "../components/text1";
import FrameComponent from "../components/frame-component";
import FooterFrame from "../components/footer-frame";
import styles from "./mac-book-air.module.css";

const MacBookAir = () => {
  return (
    <div className={styles.macbookAir}>
      <img className={styles.groupIcon} alt="" src="/group@2x.png" />
      <section className={styles.lineFrameWrapper}>
        <LineFrame />
      </section>
      <DeliveryInfo />
      <HeaderLogoFrame />
      <section className={styles.line}>
        <img className={styles.textIcon} alt="" src="/text@2x.png" />
        <div className={styles.giveUsAFollowWrapper}>
          <h1 className={styles.giveUsA}>Give us a Follow</h1>
        </div>
        <img
          className={styles.lineChild}
          loading="eager"
          alt=""
          src="/group-21.svg"
        />
        <img
          className={styles.lineItem}
          loading="eager"
          alt=""
          src="/group-11.svg"
        />
      </section>
      <Rectangle />
      <Text1 />
      <footer className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <FrameComponent />
        <FooterFrame />
        <div className={styles.linksVectorGroup}>
          <div className={styles.subscribeButton} />
          <div className={styles.delhiRollsJunction}>
            © 2023 DELHI ROLLS JUNCTION. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MacBookAir;
