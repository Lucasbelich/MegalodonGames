import { useEffect, useState } from "react";
import  getProducts  from "../../Utils/getProducts";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(prods => {
      setProducts(prods);
    }).catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1 style={{ marginTop: 50 }}>{props.greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
