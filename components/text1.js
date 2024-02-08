import styles from "./text1.module.css";

const Text1 = () => {
  return (
    <section className={styles.text}>
      <div className={styles.rollinSinceLogoContainer}>
        <h1 className={styles.rollinSince21}>Rollin Since ‘21</h1>
      </div>
      <div className={styles.text1}>
        <div className={styles.group}>
          <h1 className={styles.uniqueTaste}>
            Unique Taste | .......... | ...........
          </h1>
          <div className={styles.input}>
            <h1 className={styles.ourPhilosophy}>Our Philosophy</h1>
            <h3 className={styles.loremIpsumIs}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.finalLogoFrameGroup}>
        <img
          className={styles.finalLogoFrameGroupChild}
          alt=""
          src="/rectangle-11.svg"
        />
        <img
          className={styles.finalLogoFrameGroupItem}
          loading="eager"
          alt=""
          src="/rectangle-18@2x.png"
        />
      </div>
    </section>
  );
};

export default Text1;
