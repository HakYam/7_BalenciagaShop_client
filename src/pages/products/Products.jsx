import React, { useState, useEffect } from 'react';
import './Products.scss';
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCat, setSelectedSubCat] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?filters[categories][id][$eq]=${catId}`
  );

  // to bring cat title from its id
  const { data: categoryData, loading: categoryLoading, error: categoryError } = useFetch(
    `/categories/${catId}?populate=*`
  );

  console.log(categoryData)
  const handleSubCatChange = (e) => {
    const { id, checked } = e.target;
    setSelectedSubCat((prev) => 
      checked ? [...prev, id] : prev.filter((subCatId) => subCatId !== id)
    );
  };

  const isAllChecked = selectedSubCat.length === data?.length;

  

  return (
    <div className='container-fluid products'>
      <div className='row'>
        <div className='col-12 col-lg-3 order-1 left'>
          <div className='filterItem'>
            <h3>Product Categories</h3>
            {data?.map((item) => (
              <div className='inputItem' key={item.id}>
                <input
                  type='checkbox'
                  id={item.id}
                  value={1}
                  onChange={handleSubCatChange}
                  
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))}
          </div>
          <div className='filterItem pt-3'>
            <h3>Filter by Price</h3>
            <div className='inputItem'>
              <span>0</span>
              <input
                type='range'
                min={0}
                max={1000}
                step={10}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className='filterItem pt-3'>
            <h3>Sort by</h3>
            <div className='inputItem'>
              <input
                type='radio'
                id='asc'
                value='asc'
                name='price'
                onChange={(e) => setSort('asc')}
              />
              <label htmlFor='asc'>Price (Lowest first)</label>
            </div>
            <div className='inputItem'>
              <input
                type='radio'
                id='desc'
                value='desc'
                name='price'
                onChange={(e) => setSort('desc')}
              />
              <label htmlFor='desc'>Price (Highest first)</label>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-9 order-2 right'>
          <img
            className='catImg d-none d-lg-block'
            src={`${import.meta.env.VITE_UploadURL}${categoryData?.attributes?.img?.data?.attributes?.url}`}
            alt={categoryData?.attributes?.name || 'Category Image'}
          />
          <div className='cat'>
            <h2 className='text-center my-4 fw-light '>{categoryData?.attributes.title}</h2>
          </div>
          <div >
            {loading ? (
              <h2>Loading...</h2>
            ) : (
              <List
                catId={catId}
                maxPrice={maxPrice}
                sort={sort}
                subCats={isAllChecked ? [] : selectedSubCat} // If isAllChecked is true, pass an empty array, otherwise return selectedSubCat
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
