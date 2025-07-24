import { Link } from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = () => {


  return (
    <nav> 
      <ul className={style.MainNav}>
        <li><Link className={style.NavLink} to="/">Home</Link></li>
        <li><Link className={style.NavLink} to="/shop">Shop</Link></li>
        <li><Link className={style.NavLink} to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
