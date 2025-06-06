import { ClassNames } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { HiOutlineSun } from "react-icons/hi2";
import { HiOutlineMoon } from "react-icons/hi2";

const ThemeToggle = () => {
  const [isLight, setLight] = useState(true);

  const toggleTheme = () => {
    setLight(!isLight);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", !isLight);
    document.body.classList.toggle("light-theme", isLight);
  }, [isLight]);

  return (
    <>
      <button className="btn" onClick={toggleTheme} aria-label="Toggle theme">
        {isLight ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
      </button>
    </>
  );
};

export default ThemeToggle;
