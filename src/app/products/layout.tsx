import { Metadata } from "next";
import Link from "next/link";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "멋진 제품 사이트 | 전체 제품 확인",
  description: "멋진 제품을 확인해 보세요",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">남성옷</Link>
        <Link href="/products/men">여성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
