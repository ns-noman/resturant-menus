"use client";
import { useParams } from "next/navigation";

import Banner from "@/app/components/Banner";
import MenuList from "@/app/components/MenuList";
import menuData from "@/data/menu.json";

export default function Page() {

  const params = useParams();
  const companySlug = params.slug;

  const company_list = {
    'woodenspoon': 1,
    'db': 2,
    'scoop': 3,
    'hydro': 4
  };
  const company_id = company_list[companySlug];

  return (
    <>
      <Banner/>
      <MenuList items={menuData} companySlug={companySlug} />
    </>
  );
}