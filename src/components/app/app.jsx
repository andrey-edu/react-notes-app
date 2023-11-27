import { useState } from "react";

import clsx from "clsx";

import Sidebar from "../sidebar/sidebar";
import SearchForm from "../search-form/search-form";
import NotePreview from "../note-preview/note-preview";
import Content from "../content/content";
import MainMenu from "../main-menu/main-menu";

import styles from "./app.module.css";
function App() {
  const [isDark, setIsDark] = useState(false);

  const handleThemeClick = () => {
    setIsDark(!isDark);
  }

  return (
    <div className={clsx(styles.app, isDark && styles.dark)}>

      <Sidebar>
        <SearchForm />
        <NotePreview />
        <NotePreview />
      </Sidebar>

      <Content>
        <MainMenu isDark={isDark} handleThemeClick={handleThemeClick} />
      </Content>

    </div>
  );
}

export default App;
