import Image from "next/image";
import styles from "./ProductsList.module.css";
import React from "react";
import Link from "next/link";

function ProductsList({ productsItem }) {
  return (
    <>
      <ul>
        {productsItem.map((item) => {
          return (
            <li className={styles.productsItem} key={item.id}>
              <Link href={`/products/${item.id}`}>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={300}
                  height={300}
                />
                <div>상품명 : {item.name}</div>
                <div>가격 : {item.price}$</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProductsList;
