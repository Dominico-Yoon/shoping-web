import { fetchCartItem } from "@/api";
import CartList from "@/components/CartList";
import Header from "@/components/Header";
import React from "react";

function CartPage({ cartItem }) {
  return (
    <div>
      <Header title="장바구니" />
      <CartList cartItem={cartItem} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = await fetchCartItem();

  return {
    props: { cartItem: data },
  };
}

export default CartPage;
