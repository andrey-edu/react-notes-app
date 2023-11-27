import styles from "./content.module.css";
function Content({children}) {
  return (
    <div className={styles.content}>
     {children}
    </div>
  );
}

export default Content;
