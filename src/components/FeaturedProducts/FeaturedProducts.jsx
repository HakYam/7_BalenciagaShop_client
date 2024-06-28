import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../Card/Card';
import './FeaturedProducts.scss';
import axios from 'axios';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {
  

  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[type][$eqi]=${type}`
  );  
  

return (
  <div className="featuredProducts container pt-5">
    <div className="row mb-4">
      <div className="col-12 text-center">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptates, ea. Perferendis corrupti reiciendis nesciunt
          vitae! Sit laborum ab, eius consequatur suscipit harum cumque
          accusamus omnis!
        </p>
      </div>
    </div>
    <div className="row justify-content-center">
      {loading ? (<h2>Loading...</h2>) : data?.map(item => (
        <div className="col-6 col-md-6 col-lg-3 col-xl-3 mb-4 d-flex justify-content-center pb-4" key={item.id}>
          <Card item={item} key={item.id} />
        </div>
      ))}
  
    </div>
  </div>
);
}

export default FeaturedProducts;
