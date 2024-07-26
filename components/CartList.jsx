import Image from "next/image";
import styles from "./CartList.module.css";
import { useRouter } from "next/router";
import { deleteCartItem } from "@/api";

function CartList({ cartItem }) {
  const router = useRouter();

  const totalPrice = cartItem.reduce((acc, cur) => {
    return acc + parseFloat(cur.price);
  }, 0);

  async function removeCartItem(id) {
    const { data } = await deleteCartItem(id);

    alert(`${data.name} 삭제 되었습니다.`);

    router.replace(router.asPath);
  }

  return (
    <div className={styles.container}>
      {cartItem.map((item) => {
        return (
          <div className={styles.cartItem} key={item.id}>
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={100}
              height={100}
            />
            <div>상품명 : {item.name}</div>
            <div>가격 : {item.price}$</div>
            <button onClick={() => removeCartItem(item.id)}>삭제하기</button>
          </div>
        );
      })}
      <div>
        <div>총 가격 : {totalPrice}$</div>
        <div>총 수량 : {cartItem.length}</div>
      </div>
    </div>
  );
}

export default CartList;
