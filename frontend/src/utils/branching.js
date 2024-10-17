export function itemPushToStore(data, itms) {
  let dataCopy = [...data];
  const itmsCopy = [...itms];
  dataCopy.map((dta) => {
    dta.fileChildren = [];
    itms.forEach((itm) => {
      if (dta.id === itm.godown_id) {
        dta.fileChildren.push(itm);
      }
    });
  });
  return dataCopy;
}
export function nestedAllfolder(data, parent_id = null) {
  return data.reduce((arr, e) => {
    if (e.parent_godown === parent_id) {
      const obj = { ...e };
      const children = nestedAllfolder(data, e.id);
      if (children.length) obj.children = children;
      arr.push(obj);
    }

    return arr;
  }, []);
}
