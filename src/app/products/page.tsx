import Image from "next/image";
import Link from "next/link";
import { getProducts } from "src/service/products";
import clothesImage from "../../../public/images/clothes.jpg";
import MeowArticle from "../../components/MeowArticle";

// export const revalidate = 10;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothesImage} alt="Clothes" />
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
