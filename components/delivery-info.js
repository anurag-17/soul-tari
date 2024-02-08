import LocationName from "./location-name";
import styles from "./delivery-info.module.css";

const DeliveryInfo = () => {
  return (
    <section className={styles.deliveryInfo}>
      <div className={styles.deliveryInfoChild} />
      <h1 className={styles.bestsellers}>Bestsellers</h1>
      <div className={styles.contactSection}>
        <div className={styles.deliveryHours}>
          <div className={styles.deliveryDay}>
            <div className={styles.deliveryDayChild} />
            <div className={styles.rollsFrame}>
              <h2 className={styles.chickenTikkaRoll}>Chicken Tikka Roll</h2>
            </div>
            <LocationName wepikExport20231222093206="/wepikexport20231222093206ryha-1@2x.png" />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.tandooriPaneerTikkaRollParent}>
              <h2 className={styles.tandooriPaneerTikka}>
                Tandoori Paneer Tikka Roll
              </h2>
              <div className={styles.wepikExport20231222094106x2dParent}>
                <img
                  className={styles.wepikExport20231222094106x2dIcon}
                  alt=""
                  src="/wepikexport20231222094106x2du-1@2x.png"
                />
                <img
                  className={styles.frameItem}
                  loading="eager"
                  alt=""
                  src="/vector-210.svg"
                />
              </div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>$6.00</div>
              <div className={styles.gr600}>220gr / 600 cal</div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <div className={styles.schezwanPaneerMasalaRollVWrapper}>
              <h2 className={styles.schezwanPaneerMasala}>
                Schezwan Paneer Masala Roll (V)
              </h2>
            </div>
            <img
              className={styles.wepikExport20231222093206ryhIcon}
              loading="eager"
              alt=""
              src="/wepikexport20231222093206ryha-3@2x.png"
            />
            <div className={styles.frameWrapper}>
              <div className={styles.group}>
                <div className={styles.div1}>$6.00</div>
                <div className={styles.gr6001}>220gr / 600 cal</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.deliveryHours1}>
          <div className={styles.rectangleContainer}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-9@2x.png"
            />
            <img
              className={styles.rollNew1}
              loading="eager"
              alt=""
              src="/roll-new-1@2x.png"
            />
            <div className={styles.frameContainer}>
              <div className={styles.newRollLaunchParent}>
                <div className={styles.newRollLaunch}>New Roll Launch</div>
                <div className={styles.rollTitle}>
                  <h1 className={styles.malaiChickenTikka}>
                    Malai Chicken Tikka Roll
                  </h1>
                  <h1 className={styles.malaiChickenTikka1}>
                    Malai Chicken Tikka Roll
                  </h1>
                </div>
              </div>
            </div>
            <div className={styles.paneerLink}>
              <div className={styles.subscribeButton}>
                <div className={styles.newsletterFrame}>$6.00</div>
                <div className={styles.gr6002}>220gr / 600 cal</div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.rectangleDiv} />
            <h2 className={styles.singlesMealDeal}>Single’s Meal Deal</h2>
            <LocationName wepikExport20231222093206="/wepikexport20231222093206ryha-4@2x.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;
