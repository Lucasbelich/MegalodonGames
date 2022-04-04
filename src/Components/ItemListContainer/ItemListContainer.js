import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

const ItemListContainer = () => {
  const [count, setCount] = useState(1);

  const onAdd = (e) => {
    if (e === "-") {
      setCount(count - 1);
    }
    if (e === "+") {
      setCount(count + 1);
    }
  };
  const stock = 5;
  const initial = 1;

  return (
    <div>
      <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} />
    </div>
  );
};

export default ItemListContainer;
