import { fetchProducts } from "@/api";
import React from "react";
import ProductsList from "@/components/ProductsList";
import Header from "@/components/Header";

function ProductPage({ productItem }) {
  return (
    <>
      <Header title="상품 페이지" />
      <ProductsList productsItem={productItem} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { data } = await fetchProducts();

  return {
    props: {
      productItem: data,
    },
  };
}

export default ProductPage;
