const HOT_BEVERAGES = [
  {
    id: "hot-1",
    image: "assets/images/avatar/coffee-1.png",
    name: "CAFE AMERICANO",
    price: "$2.95",
    description: "Espresso shots topped with hot water",
    extraClass: "",
    wowDelay: null,
  },
  {
    id: "hot-2",
    image: "assets/images/avatar/coffee-3.png",
    name: "ESPRESSO MACCHIATO",
    price: "$3.95",
    description: "Rich Espresso With Milk and Foam",
    extraClass: "new",
    wowDelay: null,
  },
  {
    id: "hot-3",
    image: "assets/images/avatar/coffee-5.png",
    name: "WHITE CHOCOLATE MOCHA",
    price: "$4.95",
    description: "Fresh brewed coffee and steamed milk",
    extraClass: "",
    wowDelay: null,
  },
  {
    id: "hot-4",
    image: "assets/images/avatar/coffee-7.png",
    name: "ICED CAFFE MOCHA",
    price: "$5.95",
    description: "Fresh brewed coffee and steamed milk",
    extraClass: "",
    wowDelay: null,
  },
];

const COLD_BEVERAGES = [
  {
    id: "cold-1",
    image: "assets/images/avatar/coffee-2.png",
    name: "CAPPUCCINO",
    price: "$2.95",
    description: "Rich Espresso With Milk and Foam",
    extraClass: "",
    wowDelay: "0.1s",
  },
  {
    id: "cold-2",
    image: "assets/images/avatar/coffee-4.png",
    name: "ICED GINGERBREAD LATTE",
    price: "$3.95",
    description: "Fresh brewed coffee and steamed milk",
    extraClass: "",
    wowDelay: "0.1s",
  },
  {
    id: "cold-3",
    image: "assets/images/avatar/coffee-6.png",
    name: "VANILLA LATTE",
    price: "$4.95",
    description: "Rich Espresso With Milk and Foam",
    extraClass: "season mt-0",
    wowDelay: "0.1s",
  },
  {
    id: "cold-4",
    image: "assets/images/avatar/coffee-8.png",
    name: "CARAMEL MACCHIATO",
    price: "$4.95",
    description: "Fresh brewed coffee and steamed milk",
    extraClass: "",
    wowDelay: "0.1s",
  },
];

function SpecialMenuItem({ item }) {
  const wowProps = item.wowDelay ? { "data-wow-delay": item.wowDelay } : {};
  return (
    <div
      className={`special-menu-item wow fadeInUp${item.extraClass ? ` ${item.extraClass}` : ""}`}
      {...wowProps}
    >
      <div className="image">
        <img src={item.image} alt="" />
      </div>
      <div className="content flex-grow">
        <div className="flex items-center">
          <div className="name">
            <a href="#">{item.name}</a>
          </div>
          <div className="line"></div>
          <div className="price">{item.price}</div>
        </div>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default function SpecialMenu() {
  return (
    <div className="special-menu style-1">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="heading-section text-center mb-77 wow fadeInUp">
              <span className="sub sub-before sub-after style-big">hot beverages</span>
            </div>
            {HOT_BEVERAGES.map((item) => (
              <SpecialMenuItem item={item} key={item.id} />
            ))}
          </div>
          <div className="col-lg-6">
            <div className="heading-section text-center mb-77 wow fadeInUp" data-wow-delay="0.1s">
              <span className="sub sub-before sub-after style-big">cold beverages</span>
            </div>
            {COLD_BEVERAGES.map((item) => (
              <SpecialMenuItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
