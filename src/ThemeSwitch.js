import React, { useContext } from "react";
import Switch from "react-switch";
import {ThemeContext} from "./Provider";

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <label>
    <Switch
      checked={theme === "dark" ? false : true}
      onChange={setTheme}
      checkedIcon={false}
      uncheckedIcon={false}
      handleDiameter={20}
      onColor="#AEB3CB"
      />
      </label>
  );
}

export default ThemeSwitch;