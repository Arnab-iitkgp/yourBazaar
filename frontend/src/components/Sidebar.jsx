import { items } from "../data/items";
import { godown } from "../data/godown";
import { itemPushToStore, nestedAllfolder } from "../utils/branching";
import Folder from "./Folder";
import styles from "./Sidebar.module.css";

const Sidebar = function () {
  const result1 = itemPushToStore(godown, items);
  const result = nestedAllfolder(result1);
  return (
    <div className={styles.Container}>
      {result.map((res) => (
        <Folder directory={res} />
      ))}
    </div>
  );
};

export default Sidebar;
