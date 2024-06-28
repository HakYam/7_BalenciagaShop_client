import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="link text-decoration-none">
      <div className="card">
        <div className="position-relative">
          {item.attributes.isNew && (
            <span className="new-season-badge bg-white text-primary position-absolute bottom-0 start-0 m-2">
              New Season
            </span>
          )}
          <img
            src={`${import.meta.env.VITE_UploadURL}${item.attributes?.img?.data?.attributes?.url}`}
            alt={item.title}
            className="card-img-top ImgfixedHeight"
          />
          <img
            src={`${import.meta.env.VITE_UploadURL}${item.attributes?.img2?.data?.attributes?.url}`}
            alt={item.title}
            className="card-img-top secondImg position-absolute top-0 start-0 w-100 h-100"
          />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{item.attributes.title}</h5>
          <div className="d-flex justify-content-center align-items-center">
            <h6 className="text-muted text-decoration-line-through me-2">
              ${item.attributes.oldPrice || item.attributes.price + 20}
            </h6>
            <h6 className="text-danger">${item.attributes.price}</h6>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
