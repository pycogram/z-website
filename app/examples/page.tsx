import type { Metadata } from "next";
import Examples from './examples-content';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.zeroicai.xyz/examples",
  },
};

export default function ExamplesPage() {
  return <Examples />;
}