import styles from "./header.module.css";
import { Icon } from "../icons/Icon";
import clsx from "clsx";

export const Header__component = ({ isDarkMode, setIsDarkMode }) => {
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <header>
      <div
        className={clsx(styles.container, { [styles.lightMode]: isDarkMode })}
      >
        <div className={styles["hamburger-container"]}>
          <Icon name="menu" size="2x" />
        </div>

        <div className={styles["theme-mode-container"]} onClick={toggleTheme}>
          <Icon name="moon" size="2x" className={styles["theme-icon"]} />
        </div>
      </div>
    </header>
  );
};
