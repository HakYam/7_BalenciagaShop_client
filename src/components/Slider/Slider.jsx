import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Slider.scss';

const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/242829/pexels-photo-242829.jpeg?auto=compress&cs=tinysrgb&w=1600"
];

const Slider = ({ autoPlay = true, interval = 3000 }) => {
    useEffect(() => {
        if (autoPlay) {
            const carousel = document.querySelector('#carouselExampleIndicators');
            if (carousel) {
                const bsCarousel = new window.bootstrap.Carousel(carousel, {
                    interval: interval,
                    ride: 'carousel'
                });
                return () => {
                    bsCarousel.pause();
                };
            }
        }
    }, [autoPlay, interval]);

    return (
        <div id="carouselExampleIndicators" className="carousel slide slider" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {data.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {data.map((url, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <img src={url} className="d-block w-100" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

Slider.propTypes = {
    autoPlay: PropTypes.bool,
    interval: PropTypes.number
};

export default Slider;
