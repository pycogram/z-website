import type { Metadata } from "next";
import Docs from "./docs-content";
export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.zeroicai.xyz/docs",
  },
};

export default function DocsPage() {
  return <Docs />;
}