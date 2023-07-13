import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={"navContainer"}>
        <Link to="/" style={{ color: "aquamarine" }}>
          Joyería Sivak
        </Link>

        <ul className="categories">
          <Link to="/">Todos</Link>
          <Link to="/category/plata">Plata</Link>
          <Link to="/category/oro">Oro</Link>
        </ul>

        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
