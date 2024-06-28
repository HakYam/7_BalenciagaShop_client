import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[categories][id]=${catId}${subCats.map(item => `&filters[sub_categories][id][$eq]=${item}`
    )}&filters[price][$lte]=${maxPrice}${sort ? `&sort=price:${sort}` : ''}`
  );

  return (
   <>
   <div className="row  px-0 sm-ps-5">
      {loading
        ? "loading"
        : data?.map((item) => (
          
          <div key={item.id} className="col-6 col-sm-6 col-md-6 col-lg-3 mb-4  ">
            <Card item={item} key={item.id}/>
          </div>
          
        ))}
        </div>
        </>
  );
};

export default List;
