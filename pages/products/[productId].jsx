import { fetchProducts } from "@/api";
import Header from "@/components/Header";
import ProductItem from "@/components/ProductItem";
import React from "react";

function ProductDetailPage({ productItem }) {
  //   const { id, name, price, imageUrl } = productItem;
  console.log(productItem.name);
  return (
    <div>
      <Header title={`${productItem.name} 상품 정보`} />
      <ProductItem productItem={productItem} />
    </div>
  );
}

export async function getServerSideProps(context) {
  //   console.log(
  //     "######################################################## productId :",
  //     context.params.productId
  //   );
  const id = context.params.productId;
  const { data } = await fetchProducts(id);

  const productItem = data[0] || null;

  //   console.log(
  //     "######################################################## data :",
  //     data
  //   );

  return {
    props: { productItem },
  };
}

export default ProductDetailPage;
