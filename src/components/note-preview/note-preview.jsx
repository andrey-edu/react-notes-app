import styles from "./note-preview.module.css";
function NotePrevew() {
  return (
    <div className={styles.note}>
      <h3 className={styles.title}>
        Some title. Maybe it's long title. Long, but not enought for two lines.
      </h3>
      <p className={styles.text}>
        Very long text. Really, very very long text.
      </p>
      <p className={styles.date}>
        10.10.2020
      </p>
    </div>
  );
}

export default NotePrevew;
