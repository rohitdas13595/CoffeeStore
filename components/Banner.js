import styles from "./Banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.tile}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}> Core</span>
      </h1>
      <p className={styles.subTitle}> Dicover coffee shops nearby!</p>
      <button className={styles.button} onClick={props.onClickHandler}>
        {props.buttonText}
      </button>
    </div>
  );
};

export default Banner;
