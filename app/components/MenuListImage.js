"use client";


function MenuImage({ item }) {
  return (
    <div className="menu-image">
      <img src={`/images/menu-images/`+item} alt={""} />
    </div>
  );
}

export default function MenuListImage({ items }) {

  console.log(items);
  


  return (
    <div className="special-menu style-1 page-transition" id="menus-list">
      <div className="themesflat-container">
        <div className="row">
            <div className="col-lg-12">
              <div className="heading-section text-center mb-77">
                <span className="sub sub-before sub-after style-big">
                </span>
              </div>
              {items.map((subItem) => (
                // <h1>{subItem}</h1>
                <MenuImage
                  item={subItem}
                  key={subItem.id}
                />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}