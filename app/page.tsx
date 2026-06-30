import type { Metadata } from "next";
import Home from "./home-content";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.zeroicai.xyz/",
  },
};

export default function HomePage() {
  return <Home />;
}