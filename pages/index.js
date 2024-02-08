import styles from "./index.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.frameA}>
        <img
          className={styles.homepageSoultariV11}
          alt=""
          src="/homepage--soultari-v1-1@2x.png"
        />
        <div className={styles.frameB}>
          <div className={styles.rectangleC} />
          <img
            className={styles.n1Icon}
            loading="eager"
            alt=""
            src="/361792518-976908276786503-6846357764624476882-n-1@2x.png"
          />
        </div>
      </section>
      <img className={styles.frameDIcon} alt="" src="/frame-d@2x.png" />
    </div>
  );
};

export default Home;
