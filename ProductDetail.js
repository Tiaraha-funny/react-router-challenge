import React from "react";
import { useParams } from "react-router-dom";
import productsData from "./productsData";

function ProductDetail() {
  const { productId } = useParams();
  console.log(productId);
  const findIdProduct = productsData.find(product => product.id === Number(productId));
  console.log(findIdProduct);

  return (
    <div>
      <h2>{findIdProduct.name}</h2>
      <p>{findIdProduct.price}</p>
      <p>{findIdProduct.description}</p>
    </div>
  );
}

export default ProductDetail;
