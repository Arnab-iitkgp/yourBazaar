import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import styles from "./Searchbar.module.css";
import { items } from "../data/items";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../store/itemSlice";
const Searchbar = function () {
  const [isopen, setIsopen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleIconClick = () => {
    setIsopen(!isopen);
  };
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleItemClick = (e) => {
    const itemName = e.target.innerText;
    const itm = items.find((item) => item.name == itemName);
    dispatch(setSelectedItem(itm));
    setValue("");
  };

  return (
    <div className={styles.searchbar}>
      <IoSearch onClick={handleIconClick} className={styles.icon} />
      <div
        className={isopen ? styles.searchInput.expanded : styles.searchInput}
      >
        <input
          type="text"
          placeholder="Search..."
          className={styles.textbox}
          onChange={handleOnChange}
          value={value}
        />
      </div>

      <div className={styles.suggestion}>
        {value
          ? items
              .filter((itm) =>
                itm.name.toLowerCase().startsWith(value.toLowerCase())
              )
              .slice(0, 7)
              .map((itm) => (
                <div
                  key={itm.id}
                  className={styles.suggestionItem}
                  onClick={handleItemClick}
                >
                  {itm.name}
                </div>
              ))
          : null}
      </div>
    </div>
  );
};

export default Searchbar;
