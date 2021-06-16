import "./Navbar.css";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
const Navbar = ({ click }) => {
   const state = useSelector(state => state.cart);
   let {products} =  state;
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>React Redux-Store</h2>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i class="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{products === undefined  ? 0 : products.length}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      <div className="hambuger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
