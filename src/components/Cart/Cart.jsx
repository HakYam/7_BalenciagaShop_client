import React, { useState, useRef, useEffect } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';

const Cart = () => {
    const products = useSelector((state) => state.cart.products);
    const [isVisible, setIsVisible] = useState(true);
    const cartRef = useRef(null); // to hide the cart when clicking outside

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total.toFixed(2);
    };

    const dispatch = useDispatch();

    const handleClickOutside = (event) => {
        if (cartRef.current && !cartRef.current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    // to hide the cart when clicking outside
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="cart" ref={cartRef}>
            <h4>Products in your Cart</h4>

            {products?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={`${import.meta.env.VITE_UploadURL}${item.img}`} alt={item.title} />
                    <div className="details">
                        <h6>{item.title}</h6>
                        <div className="price">Price: {item.quantity} x ${item.price}</div>
                    </div>
                    <DeleteOutlineIcon className="delete"
                        onClick={() => dispatch(removeItem(item.id))}
                    />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>{totalPrice()}</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>
    );
};

export default Cart;
