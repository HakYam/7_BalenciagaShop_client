import React, { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';



const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState('img');
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(
    `/products/${id}?populate=*`);

    console.log(data);
    const dispatch = useDispatch();

  return (
    <div className='container py-5'>
      {loading ? (<div>Loading...</div>) : <div className='row'>
        <div className='col-12 col-md-6 mb-4 mb-md-0'>
          <div className='row'>
            <div className='col-3 '>
              <img
                className='img-fluid'
                src={`${import.meta.env.VITE_UploadURL}${data?.attributes?.img?.data?.attributes?.url}`}
                onClick={() => setSelectedImg('img')}
              />
              <img
                className='img-fluid mt-2'
                src={`${import.meta.env.VITE_UploadURL}${data?.attributes?.img2?.data?.attributes?.url}`}
                onClick={() => setSelectedImg('img2')}
              />
            </div>
            <div className='col-9 ps-0'>
              <img className='img-fluid' src={`${import.meta.env.VITE_UploadURL}${data?.attributes[selectedImg].data?.attributes?.url}`} />
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <h1>{data?.attributes?.title}</h1>
          <span className='price d-block'>{data?.attributes?.price} $</span>
          <p>
            {data?.attributes?.description}
          </p>
          <div className='quantity d-flex align-items-center'>
            <button className='btn btn-outline-secondary' onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
            <span className='mx-2'>{quantity}</span>
            <button className='btn btn-outline-secondary' onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button className='btn btn-primary my-3 d-flex align-items-center'
          onClick={() => dispatch (addToCart({
            id: data.id,
            title: data.attributes.title,
            desc: data.attributes.description,
            quantity, // same as quantity: quantity
            price: data.attributes.price,
            img: data.attributes[selectedImg].data.attributes.url,
          }))}
          >
            <AddShoppingCartIcon className='me-2' style={{ color: 'white' }} /> ADD TO CART
          </button>
          <div className='links'>
            <div className='item d-flex align-items-center mb-2'>
              <FavoriteBorderIcon className='me-2' style={{ color: '#2879fe' }} /> ADD TO WISH LIST
            </div>
            <div className='item d-flex align-items-center'>
              <BalanceIcon className='me-2' style={{ color: '#2879fe' }} /> ADD TO COMPARE
            </div>
          </div>
          <div className='info mt-4'>
            <span className='d-block'>Vendor: Polo</span>
            <span className='d-block'>Product Type: T-Shirt</span>
            <span className='d-block'>Tag: T-Shirt, Women, Top</span>
          </div>
          <div className='mt-4'>
            <span className='d-block'>DESCRIPTION</span>
            <span className='d-block'>ADDITIONAL INFORMATION</span>
            <span className='d-block'>FAQ</span>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Product;
