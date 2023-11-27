import styles from "./sidebar.module.css";
import SearchForm from "../search-form/search-form";
import NotePrevew from "../note-preview/note-preview";
function Sidebar({children}) {
  return (
    <div className={styles.sidebar}>
      {children}
    </div>
  );
}

export default Sidebar;
