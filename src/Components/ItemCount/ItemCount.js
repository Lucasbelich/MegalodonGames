import Counter from "../Counter/Counter";
import { useState } from "react";

const ItemCount = () => {
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
      <Counter onAdd={onAdd} stock={stock} initial={initial} count={count} />
    </div>
  );
};

export default ItemCount;
