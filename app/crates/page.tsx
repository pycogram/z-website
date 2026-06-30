import type { Metadata } from "next";
import Crates from "./crates-content";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.zeroicai.xyz/crates",
  },
};

export default function CratesPage() {
  return <Crates />;
}