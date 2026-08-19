import Banner from "@/app/components/Banner";
import MenuList from "@/app/components/MenuList";
import {getMenuList} from "@/services/menuService";

export default async function Page({ params }) {
  const { slug } = await params;
  const company_list = {
    woodenspoon: { company_id: 3, branch_code: "00001" },
    db: { company_id: 9, branch_code: "00010" },
    scoop: { company_id: 12, branch_code: "00012" },
    hydro: { company_id: 4, branch_code: "00015" },
  };
 const companyInfo = company_list[slug];
 const res = await getMenuList(`company_id=${companyInfo.company_id}&branch_code=${companyInfo.branch_code}`);
  const items = Object.values(res.items.reduce((acc, item) => {
    if (!acc[item.category_id]) {
      acc[item.category_id] = {
        category_id: item.category_id,
        category_name: item.category,
        items: [],
      };
    }
    let img = item.image !== null ? `http://123.200.18.157:8889/i/store_images/rest_ms/${item.image.replaceAll('\\','/').split('/').pop()}` : '/images/logo/logo.png';
    acc[item.category_id].items.push({
      id: item.id,
      image: img,
      name: item.name,
      price: item.price,
      description: item.description,
      extraClass: "",
      wowDelay: "0.1s",
    });
    return acc;
  }, {}));
  return (
    <>
      <Banner />
      <MenuList
        items={items}
        companySlug={slug}
      />
    </>
  );
}