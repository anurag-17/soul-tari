import styles from "./header-logo-frame.module.css";

const HeaderLogoFrame = () => {
  return (
    <section className={styles.headerLogoFrame}>
      <div className={styles.headerLogoFrameChild} />
      <div className={styles.mainTitleText}>
        <div className={styles.reviews}>REVIEWS</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.containerFrameWrapper}>
          <div className={styles.containerFrame}>
            <img
              className={styles.containerFrameChild}
              loading="eager"
              alt=""
              src="/vector-41@2x.png"
            />
            <div className={styles.deliveryFrame}>
              <h1 className={styles.loremIpsumIs}>
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.”
              </h1>
              <div className={styles.michle}>- michle</div>
            </div>
          </div>
        </div>
        <div className={styles.delhiRollsText}>
          <div className={styles.groupClipPathVector}>
            <div className={styles.lineSeparator}>
              <h1 className={styles.loremIpsumIs1}>
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.”
              </h1>
              <div className={styles.michle1}>- michle</div>
            </div>
            <img
              className={styles.delhiRollsLogoFrame}
              loading="eager"
              alt=""
              src="/vector-51@2x.png"
            />
          </div>
          <div className={styles.rollinSinceText}>
            <img
              className={styles.rollinSinceTextChild}
              loading="eager"
              alt=""
              src="/vector-61@2x.png"
            />
            <div className={styles.uniqueTasteText}>
              <h1 className={styles.loremIpsumIs2}>
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.”
              </h1>
              <div className={styles.michle2}>- michle</div>
            </div>
          </div>
          <div className={styles.rollsLogoContainer}>
            <div className={styles.backgroundRectangle}>
              <h1 className={styles.loremIpsumIs3}>
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.”
              </h1>
              <div className={styles.michle3}>- michle</div>
            </div>
            <img
              className={styles.deliveryInfoIcon}
              loading="eager"
              alt=""
              src="/vector-71@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderLogoFrame;
