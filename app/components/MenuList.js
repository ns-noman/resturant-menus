"use client";
import { toast } from "sonner";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
function SpecialMenuItem({ item, companySlug }) {
  
  const addToCart = useCartStore((state) => state.addToCart);

  const wowProps = { "data-wow-delay": "0.3s" };

  const handleAddToCart = () => {
    addToCart(companySlug, {
      id: item.id,
      name: item.name,
      image: item.image,
      price: Number(item.price),
    });
    toast.success(`${item.name} has been added to the cart!`);
  };

  return (
    <div
      className={`special-menu-item wow fadeInUp${
        item.extraClass ? ` ${item.extraClass}` : ""
      }`}
      {...wowProps}
    >
      <div className="image">
        <Image src={item.image} alt={item.name} width={75} height={75} />
      </div>

      <div className="content flex-grow">
        <div className="flex items-center">
          <div className="name">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              {item.name}
            </a>
          </div>
          <div className="line"></div>
          <div className="price">
            BDT {item.price}
          </div>
        </div>
        <p>{item.description}</p>
        <button onClick={handleAddToCart} className="button-style-1" aria-label={`Add ${item.name} to cart`}>
            <span>ADD TO CART</span>
            <i className="icon-shoppingcart"></i>
        </button>
      </div>
    </div>
  );
}

export default function MenuList({ items, companySlug }) {
  return (
    <div
      className="special-menu style-1 page-transition"
      id="menus-list"
    >
      <div className="themesflat-container">
        <div className="row">
          {items.map((item) => (
            <div
              key={item.category_name}
              className="col-lg-6"
            >
              <div className="heading-section text-center mb-77 wow fadeInUp">
                <span className="sub sub-before sub-after style-big">
                  {item.category_name}
                </span>
              </div>

              {item.items.map((subItem) => (
                <SpecialMenuItem
                  item={subItem}
                  companySlug={companySlug}
                  key={subItem.id}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}