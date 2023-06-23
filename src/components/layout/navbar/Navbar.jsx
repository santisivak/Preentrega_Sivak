import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer">
      <h4>Joyería Sivak</h4>
      <ul className="containerCategories">
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
        <li>
          <a href="">Sobre nosotros</a>
        </li>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
