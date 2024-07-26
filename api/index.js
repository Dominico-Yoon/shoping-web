import axios from "axios";

const instacne = axios.create({
  baseURL: "http://180.65.12.137:4000",
});

// 상품 목록을 조회하는 API
function fetchProducts(productsId) {
  return instacne.get("/products", {
    params: {
      id: productsId,
    },
  });
}

// 장바구니 목록을 조회하는 API
function fetchCartItem() {
  return instacne.get("/carts");
}

// 장바구니에 상품을 추가하는 API
function createCartItem({ id, name, price, imageUrl }) {
  return instacne.post("/carts", {
    id,
    name,
    price,
    imageUrl,
  });
}

// 장바구니에 상품을 삭제하는 API
function deleteCartItem(id) {
  return instacne.delete(`/carts/${id}`);
}

export { fetchProducts, fetchCartItem, createCartItem, deleteCartItem };
