import CounterContainer from "../../common/Counter/CounterContainer";

const ItemDetalle = ({ product, agregarAlCarrito }) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <h3>{product.price}</h3>

      <CounterContainer
        stock={product.stock}
        agregarAlCarrito={agregarAlCarrito}
      />
    </div>
  );
};

export default ItemDetalle;
