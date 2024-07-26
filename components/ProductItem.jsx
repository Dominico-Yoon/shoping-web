import Image from "next/image";
import styles from "./ProductItem.module.css";
import { createCartItem } from "@/api";
import { useRouter } from "next/router";

function ProductItem({ productItem }) {
  const router = useRouter();
  const { id, name, price, imageUrl } = productItem;

  async function addCartItem() {
    const res = await createCartItem(productItem);
    alert("장바구니에 추가 되었습니다.");

    router.push("/cart");
  }

  return (
    <div className={styles.container}>
      <Image src={imageUrl} alt={name} width={300} height={300} />
      <div className={styles.description}>
        <div>{name}</div>
        <div>{price}</div>
        <button onClick={addCartItem}>장바구니 추가</button>
      </div>
    </div>
  );
}

export default ProductItem;
