import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer container-fluid py-5 ">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 col-md-3 mb-4 mb-md-0">
                        <h1>Categories</h1>
                        <ul className="list-unstyled">
                            <li>Women</li>
                            <li>Men</li>
                            <li>Shoes</li>
                            <li>Accessories</li>
                            <li>New Arrivals</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3 mb-4 mb-md-0">
                        <h1>Links</h1>
                        <ul className="list-unstyled">
                            <li>FAQ</li>
                            <li>Pages</li>
                            <li>Stores</li>
                            <li>Compare</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3 mb-4 mb-md-0">
                        <h1>About</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                        </p>
                    </div>
                    <div className="col-12 col-md-3">
                        <h1>Contact</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-between align-items-center">
                    <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <span className="logo d-block mb-2">Balenciaga</span>
                        <span className="copyright">
                            © Copyright 2024. All Rights Reserved
                        </span>
                    </div>
                    <div className="col-12 col-md-6 text-center text-md-end">
                        <img src="/img/payment.png" alt="Payment Methods" className="img-fluid" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
