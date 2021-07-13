import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import style from "./styles.module.scss";
import { LMSearchInputProps } from "./types";
import { searchIconLM } from "../../LMIcons";

export const LMSearchInput: React.FC<LMSearchInputProps> = ({ onSearch }) => {
  const [valueSearch, setValueSearch] = useState<string>("");

  const handleOnChangeSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setValueSearch(e.target.value);

  const handleKeyUpSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch(valueSearch);
  };
  
  const handleBlurSearch = () => onSearch(valueSearch);

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
      <div className={style.icon}>
        {searchIconLM}
      </div>
    </div>
  );
};

export default LMSearchInput;
