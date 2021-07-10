import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./styles.module.scss";

export const LMSearchInput: React.FC = () => {
  const [valueSearch, setValueSearch] = useState<string>("");
  const handleOnChangeSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setValueSearch(e.target.value);
  const handleKeyUpSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "enter") console.log("Buscar");
  };
  const handleBlurSearch = () => console.log("Buscar");

  return (
    <div className={style.cont}>
      <input
        className={style.input}
        type="text"
        value={valueSearch}
        onChange={handleOnChangeSearch}
        onKeyUp={handleKeyUpSearch}
        onBlur={handleBlurSearch}
      />
      <div className={style.icon}><FontAwesomeIcon icon="search" /></div>
    </div>
  );
};

export default LMSearchInput;
