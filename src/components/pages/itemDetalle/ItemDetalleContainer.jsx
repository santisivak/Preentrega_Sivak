import { useEffect, useState } from "react";
import ItemDetalle from "./ItemDetalle";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemDetalleContainer = () => {
  const [product, setProduct] = useState({});

  let { id } = useParams();

  useEffect(() => {
    let promesa = new Promise((resolve, reject) => {
      let productSelected = products.find((product) => product.id === +id);
      resolve(productSelected);
    });
    promesa.then((res) => setProduct(res)).catch((error) => console.log(error));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    console.log(data);
  };

  return <ItemDetalle product={product} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemDetalleContainer;
