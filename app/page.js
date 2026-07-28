
import Link from "next/link";
import Banner from "./components/Banner";
import SpecialMenu from "./components/SpecialMenu";
import MenuSection from "./components/MenuSection";

export default function Home() {
  return (<>
    <Banner/>
    <SpecialMenu/>
    <MenuSection/>
  </>
  );
}