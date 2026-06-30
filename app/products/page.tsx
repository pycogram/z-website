import type { Metadata } from "next";
import { ProductsContent } from "./products-content";

export const metadata: Metadata = {
  title: "Products",
  description: "Applications built with the ZeroicAI multi-agent framework.",
  alternates: {
    canonical: "https://www.zeroicai.xyz/products",
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
