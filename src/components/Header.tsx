import { LOGO_URL } from "../utils/constants.js";
const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <img src={LOGO_URL} width='80' className="d-inline-block align-text-top"></img>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </nav>
  );
};

export default Header;
