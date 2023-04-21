import { NextResponse } from "next/server";
import { getProducts } from "src/service/products";

export async function GET(request: Request) {
  const products = await getProducts();
  return NextResponse.json({ products });
}
