"use client";
import { useParams } from "next/navigation";

import Banner from "@/app/components/Banner";
import MenuList from "@/app/components/MenuList";
import MenuListImage from "@/app/components/MenuListImage";


export default async function Page({ params }) {
  const Items = [
      {
        item_type: "hot beverages",
        items: [
          {
            id: "hot-1",
            image: "/images/avatar/coffee-1.png",
            name: "CAFE AMERICANO",
            price: "$2.95",
            description: "Espresso shots topped with hot water",
            extraClass: "",
            wowDelay: null,
          },
          {
            id: "hot-2",
            image: "/images/avatar/coffee-3.png",
            name: "ESPRESSO MACCHIATO",
            price: "$3.95",
            description: "Rich Espresso With Milk and Foam",
            extraClass: "",
            wowDelay: null,
          },
          {
            id: "hot-3",
            image: "/images/avatar/coffee-5.png",
            name: "WHITE CHOCOLATE MOCHA",
            price: "$4.95",
            description: "Fresh brewed coffee and steamed milk",
            extraClass: "",
            wowDelay: null,
          },
          {
            id: "hot-4",
            image: "/images/avatar/coffee-7.png",
            name: "ICED CAFFE MOCHA",
            price: "$5.95",
            description: "Fresh brewed coffee and steamed milk",
            extraClass: "",
            wowDelay: null,
          },
        ],
    },
      {
        item_type: "cold beverages",
        items: [
          {
            id: "cold-1",
            image: "/images/avatar/coffee-2.png",
            name: "CAPPUCCINO",
            price: "$2.95",
            description: "Rich Espresso With Milk and Foam",
            extraClass: "",
            wowDelay: "0.1s",
          },
          {
            id: "cold-2",
            image: "/images/avatar/coffee-4.png",
            name: "ICED GINGERBREAD LATTE",
            price: "$3.95",
            description: "Fresh brewed coffee and steamed milk",
            extraClass: "",
            wowDelay: "0.1s",
          },
          {
            id: "cold-3",
            image: "/images/avatar/coffee-6.png",
            name: "VANILLA LATTE",
            price: "$4.95",
            description: "Rich Espresso With Milk and Foam",
            extraClass: "",
            wowDelay: "0.1s",
          },
          {
            id: "cold-4",
            image: "/images/avatar/coffee-8.png",
            name: "CARAMEL MACCHIATO",
            price: "$4.95",
            description: "Fresh brewed coffee and steamed milk",
            extraClass: "",
            wowDelay: "0.1s",
          },
        ],
    },
      {
        item_type: "Smoothies",
        items: [
          {
            id: "cold-1",
            image: "/images/avatar/coffee-2.png",
            name: "CAPPUCCINO",
            price: "$2.95",
            description: "Rich Espresso With Milk and Foam",
            extraClass: "",
            wowDelay: "0.1s",
          },
          {
            id: "cold-2",
            image: "/images/avatar/coffee-4.png",
            name: "ICED GINGERBREAD LATTE",
            price: "$3.95",
            description: "Fresh brewed coffee and steamed milk",
            extraClass: "",
            wowDelay: "0.1s",
          },
          {
            id: "cold-3",
            image: "/images/avatar/coffee-6.png",
            name: "VANILLA LATTE",
            price: "$4.95",
            description: "Rich Espresso With Milk and Foam",
            extraClass: "",
            wowDelay: "0.1s",
          },
          {
            id: "cold-4",
            image: "/images/avatar/coffee-8.png",
            name: "CARAMEL MACCHIATO",
            price: "$4.95",
            description: "Fresh brewed coffee and steamed milk",
            extraClass: "",
            wowDelay: "0.1s",
          },
        ],
    },
      {
        item_type: "Fresh Juice",
        items: [
          {
            id: "cold-1",
            image: "/images/avatar/coffee-2.png",
            name: "CAPPUCCINO",
            price: "$2.95",
            description: "Rich Espresso With Milk and Foam",
            extraClass: "",
            wowDelay: "0.1s",
          },
          {
            id: "cold-2",
            image: "/images/avatar/coffee-4.png",
            name: "ICED GINGERBREAD LATTE",
            price: "$3.95",
            description: "Fresh brewed coffee and steamed milk",
            extraClass: "",
            wowDelay: "0.1s",
          },
          {
            id: "cold-3",
            image: "/images/avatar/coffee-6.png",
            name: "VANILLA LATTE",
            price: "$4.95",
            description: "Rich Espresso With Milk and Foam",
            extraClass: "",
            wowDelay: "0.1s",
          },
          {
            id: "cold-4",
            image: "/images/avatar/coffee-8.png",
            name: "CARAMEL MACCHIATO",
            price: "$4.95",
            description: "Fresh brewed coffee and steamed milk",
            extraClass: "",
            wowDelay: "0.1s",
          },
        ],
    },
  ];


  const images = {
    woodenspoon: ['woodenspoon (1).jpeg', 'woodenspoon (2).jpeg', 'woodenspoon (3).jpeg', 'woodenspoon (4).jpeg', 'woodenspoon (5).jpeg', 'woodenspoon (6).jpeg', 'woodenspoon (7).jpeg', 'woodenspoon (8).jpeg', 'woodenspoon (9).jpeg', 'woodenspoon (10).jpeg'],
    db: ['db.jpeg'],
    hydro: ['hydro.jpeg'],
    scoop: ['scoop (1).jpeg', 'scoop (2).jpeg'],
  }
  
  const { slug } = await params;

  console.log("Slug:", slug);

  const imagesForCompany = images[slug] || [];

  console.log(imagesForCompany);

  return (
    <>
      <Banner/>
      <MenuListImage items={images} />
      {/* <MenuList items={Items} /> */}
    </>
  );
}