"use client";

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
            <a href="#" onClick={(e)=>{e.preventDefault();}}>{item.name}</a>
          </div>
          <div className="line"></div>
          <div className="price">{item.price}</div>
        </div>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default function MenuList({ items }) {
  return (
    <div className="special-menu style-1 page-transition" id="menus-list">
      <div className="themesflat-container">
        <div className="row">
          {items.map((item) => (
            <div key={item.item_type} className="col-lg-6">
              <div className="heading-section text-center mb-77 wow fadeInUp">
                <span className="sub sub-before sub-after style-big">
                  {item.item_type}
                </span>
              </div>
              {item.items.map((subItem) => (
                <SpecialMenuItem
                  item={subItem}
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
