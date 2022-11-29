import styles from "./Avatar.module.css";

export function Avatar(props) {
  return (
    <img
      className={styles.cover}
      src={props.src}
    />
  );
}
