import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../store/itemSlice";
import styles from "./Folder.module.css";
const Folder = function ({ directory }) {
  const [isVisible, setIsVisible] = useState(false);
  const expand = () => {
    setIsVisible(!isVisible);
    // console.log(directory)
  };
  const dispatch = useDispatch();
  const showItem = function (file) {
    console.log(file);
    dispatch(setSelectedItem(file));
  };
  return (
    <div style={{ paddingLeft: 8 }}>
      <span onClick={expand} className={isVisible ? styles.activeDir : null}>
        📂
        {directory.name}
      </span>
      {isVisible ? (
        <>
          {directory?.children?.map((child) => {
            return (
              <div style={{ paddingLeft: 10 }}>
                <Folder directory={child} />
              </div>
            );
          })}

          {directory?.fileChildren?.map((file) => {
            return (
              <div style={{ paddingLeft: 10 }} onClick={() => showItem(file)}>
                {/* <a href={file.image_url}>  */}
                🖼️{file.name}
                {/* </a> */}
              </div>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Folder;
