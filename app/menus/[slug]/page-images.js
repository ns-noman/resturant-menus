"use client";

import { useParams } from "next/navigation";

import Banner from "@/app/components/Banner";
import MenuListImage from "@/app/components/MenuListImage";

export default function Page() {
  const params = useParams();
  const slug = params.slug;

  const images = {
    woodenspoon: [
      "woodenspoon (1).jpeg",
      "woodenspoon (2).jpeg",
      "woodenspoon (3).jpeg",
      "woodenspoon (4).jpeg",
      "woodenspoon (5).jpeg",
      "woodenspoon (6).jpeg",
      "woodenspoon (7).jpeg",
      "woodenspoon (8).jpeg",
      "woodenspoon (9).jpeg",
      "woodenspoon (10).jpeg",
    ],
    db: ["db.jpeg"],
    hydro: ["hydro.jpeg"],
    scoop: [
      "scoop (1).jpeg",
      "scoop (2).jpeg",
    ],
  };

  const imagesForCompany = images[slug] || [];

  console.log("Slug:", slug);
  console.log("Images:", imagesForCompany);

  return (
    <>
      <Banner />

      <MenuListImage items={imagesForCompany} />
    </>
  );
}