import styles from "./search-form.module.css";
function SearchForm() {
  return (
    <div className="p_4 pt_6 pb_6">
      <input className={styles.input} name="search" type="search" placeholder="Search" />
    </div>
  );
}

export default SearchForm;
