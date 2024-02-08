import styles from "./rectangle.module.css";

const Rectangle = () => {
  return (
    <section className={styles.rectangle}>
      <div className={styles.rectangleChild} />
      <div className={styles.contactlessDeliveryAvailableParent}>
        <h1 className={styles.contactlessDeliveryAvailable}>
          Contactless delivery available
        </h1>
        <div className={styles.frameParent}>
          <div className={styles.textWrapper}>
            <div className={styles.text}>
              <h3 className={styles.location}>Location</h3>
              <div className={styles.delhiRollsJunction}>
                Delhi rolls Junction (South Yarra)
              </div>
            </div>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.textParent}>
            <div className={styles.text1}>
              <h3 className={styles.deliveryHours}>Delivery hours</h3>
              <div className={styles.mondaySaturdayContainer}>
                <p className={styles.mondaySaturday}>Monday – Saturday</p>
                <p className={styles.am11pm}>11AM – 11PM</p>
              </div>
            </div>
            <div className={styles.sunday11amContainer}>
              <p className={styles.sunday}>Sunday</p>
              <p className={styles.am08pm}>11AM - 08PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <img
          className={styles.textIcon}
          loading="eager"
          alt=""
          src="/rectangle-16@2x.png"
        />
      </div>
    </section>
  );
};

export default Rectangle;
