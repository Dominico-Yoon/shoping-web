import { fetchProducts } from "@/api";
import Header from "@/components/Header";
import ProductsList from "@/components/ProductsList";
import Link from "next/link";

function HomePage({ initialProducts }) {
  return (
    <div>
      <Header className="productContainer" title="상품 요약 페이지" />
      <ProductsList productsItem={initialProducts} />
      <Link href="/products">
        <div>더 보기</div>
      </Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = await fetchProducts();
  return {
    props: { initialProducts: data.slice(0, 4) },
  };
}

export default HomePage;
