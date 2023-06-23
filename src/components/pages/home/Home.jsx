const Home = ({ nombre, contador, setContador }) => {
  return (
    <div style={{ padding: "0 20px" }}>
      <h1>Hola {nombre}</h1>
      <h2>{contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
    </div>
  );
};

export default Home;
