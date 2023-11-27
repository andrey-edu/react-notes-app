import clsx from "clsx";

import styles from "./button.module.css";
function Button({children, type="regular", active=false, handler}) {
    return (
      <>
        <button
          className={clsx(
            styles.button,
            type==="danger" && styles.danger,
            active && styles.active
          )}
          onClick={handler}>
          {children}
        </button>
      </>
    );
  }

  export default Button;
