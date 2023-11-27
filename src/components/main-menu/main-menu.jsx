import { useState, useEffect } from "react";

import clsx from "clsx";
// import { motion, useAnimate } from "framer-motion"

import {
  RxHamburgerMenu, RxPencil2, RxChevronLeft,
  RxChevronRight, RxSun, RxMoon, RxTrash } from "react-icons/rx";

import Button from "../button/button";

import styles from "./main-menu.module.css";
function MainMenu({isDark, handleThemeClick}) {
  const [extraActive, setExtraActive] = useState(false);

  const handleExtraClick = () => {
    setExtraActive(!extraActive);
  }

  return (
    <div className={styles.menu}>
      <div className={styles.submenu}>
        <Button>
          <RxHamburgerMenu />
        </Button>
      </div>

      <div className={styles.submenu}>
        <div className={styles.title}>NotesApp</div>
      </div>

      <div className={styles.submenu}>
        <Button>
          <RxPencil2 />
        </Button>
        <Button active={extraActive} handler={handleExtraClick}>
          {extraActive ? <RxChevronRight /> : <RxChevronLeft />}
        </Button>

        {
          extraActive && (
            <div className={clsx(styles.extra)}>
              <Button handler={handleThemeClick}>
                {isDark ? <RxSun /> : <RxMoon />}
              </Button>
              <Button type="danger">
                <RxTrash />
              </Button>
            </div>
          )
        }
      </div>
    </div>
  );
  }

  export default MainMenu;
