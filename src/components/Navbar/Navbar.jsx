import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // products count in cart badge
    const products = useSelector((state) => state.cart.products);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="navbarNav" aria-expanded={menuOpen ? "true" : "false"} aria-label="Toggle navigation">
                    <MenuIcon />
                </button>
                <Link className="navbar-brand d-lg-none" to="/">Balenciaga</Link>
                <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div className="nav-link">
                                <img src="/img/en.png" alt="Language" />
                                <KeyboardArrowDownIcon />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                USD <KeyboardArrowDownIcon />
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products/1">Women</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products/2">Men</Link>
                        </li>
                    </ul>
                    <Link className="navbar-brand d-none d-lg-block mx-auto fs-3" to="/">Balenciaga</Link>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-none d-lg-flex flex-lg-row">
                        <li className="nav-item">
                            <Link className="nav-link" to="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Stores</Link>
                        </li>
                        <li className="nav-item d-flex align-items-center px-2">
                            <SearchIcon />
                        </li>
                        <li className="nav-item d-flex align-items-center px-2">
                            <PersonOutlineIcon />
                        </li>
                        <li className="nav-item d-flex align-items-center px-2">
                            <FavoriteBorderIcon />
                        </li>
                        <li className="nav-item d-flex align-items-center position-relative ps-2">
                            <ShoppingBagIcon onClick={() => setOpenCart(!openCart)}/>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                {products.length}
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="d-flex d-lg-none justify-content-between w-50">
                    <div className="d-flex align-items-center ">
                        <SearchIcon />
                    </div>
                    <div className="d-flex align-items-center">
                        <PersonOutlineIcon />
                    </div>
                    <div className="d-flex align-items-center">
                        <FavoriteBorderIcon />
                    </div>
                    <div className="d-flex align-items-center position-relative">
                        <ShoppingBagIcon onClick={() => setOpenCart(!openCart)}/>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                        {products.length}
                        </span>
                    </div>
                </div>
            </div>

            {openCart && <Cart />}
        </nav>
    );
}

export default Navbar;
