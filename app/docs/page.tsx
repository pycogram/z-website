import type { Metadata } from "next";
import Docs from "./docs-content";
export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.zeroicai.org/docs",
  },
};

export default function DocsPage() {
  return <Docs />;
}