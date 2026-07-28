"use client";

import { useState } from "react";

const NAV_LEFT = [
  {
    label: "Home",
    href: "#",
    hasChildren: true,
    children: [
      { label: "Home 1", href: "/index-2.html" },
      { label: "Home 2", href: "/home-2.html" },
    ],
  },
  { label: "Menu", href: "/menu.html", current: true },
  { label: "Reservation", href: "/reservation.html" },
];

const NAV_RIGHT_PAGES_CHILDREN = [
  { label: "About", href: "/about.html" },
  { label: "Offer", href: "/offer.html" },
  { label: "Our Team", href: "/team.html" },
  { label: "Portfolio", href: "/portfolio.html" },
  { label: "Private Event", href: "/event.html" },
  { label: "Shop", href: "/shop.html" },
  { label: "Shop Single", href: "/shop-single.html" },
  { label: "404", href: "/404.html" },
];

const NAV_RIGHT_BLOG_CHILDREN = [
  { label: "Blog", href: "/blog.html" },
  { label: "Blog Single", href: "/blog-single.html" },
];

const CART_ITEMS = [
  {
    id: 1,
    image: "/images/box-item/avt-product-1.png",
    price: "$20.00",
    name: "instant coffee",
    hasOldPrice: false,
  },
  {
    id: 2,
    image: "/images/box-item/avt-product-2.png",
    price: "$20.00",
    name: "instant coffee",
    hasOldPrice: false,
  },
  {
    id: 3,
    image: "/images/box-item/avt-product-3.png",
    price: "$31.00",
    oldPrice: "$41.00",
    name: "instant coffee",
    hasOldPrice: true,
    isLast: true,
  },
];

export default function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [welcomeActive, setWelcomeActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  const toggleMobileSubmenu = (label) => {
    setOpenMobileSubmenu((current) => (current === label ? null : label));
  };

  return (
    <header id="header_main" className="header header-fixed style-absolute">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="header-top">
              <div className="wg-information location">
                <div className="icon">
                  <i className="icon-location"></i>
                </div>
                <div className="content">
                  <div className="title">LOCATION</div>
                  <p>448 West Foxrun St. Bronx</p>
                </div>
              </div>
              <div className="wg-information call row-reverse text-end">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="18" viewBox="0 0 16 18">
                    <image data-name="" width="16" height="18" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAzklEQVQ4jZVTURXCMAy88GagFmYBC9OCBbRMAxKYBJDAJDAJxytr8rLSsfZ+9toll7skhYJkT/LFOjxIBniQHCuTFdeYLliT7wAGtGEBMEmS8m5MNqiCC4BQl7LBLK6JQ6ONm4g87RRVNDbxW+zkGOdG+bGJ6PKLhCk7K4KzuS2YFknRl0pG2Rqgd96Cr1g9ESMQkcWR7BGc09e6f8oClKBooaS22/kRfh7LlrjU4PVNVO7AeGThCBaXE8T518Di7C04G9HnvzEuIrIuEYAP95cHumv/LXMAAAAASUVORK5CYII="/>
                  </svg>
                </div>
                <div className="content">
                  <div className="title">CALL DELIVERY</div>
                  <p>(734) 665-1852 or (770) 942-7739</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-inner">
        <div className="header-inner-wrap">
          <div
            className={`mobile-button${mobileNavActive ? " active" : ""}`}
            onClick={() => setMobileNavActive(true)}
          >
            <span></span>
          </div>
          {/* /mobile-button */}
          <div className="header-left">
            <div className="canvas">
              <div
                className="canvas-button"
                onClick={() => setWelcomeActive(true)}
              >
                <span></span>
              </div>
              <div className={`wg-welcom${welcomeActive ? " active" : ""}`}>
                <div className="inner">
                  <div
                    className="button-close"
                    onClick={() => setWelcomeActive(false)}
                  >
                    <i className="icon-close"></i>
                  </div>
                  <div className="title">
                    Welcome To <br /> Basilico Coffee &amp; Tea.
                  </div>
                  <div className="text">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15" height="14" viewBox="0 0 15 14">
                    <image data-name=" copy" width="15" height="14" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAA6klEQVQokYWTvRGDMAyFHxwLkBGgoKJiBRghjGBGSEZIRkhGSEZIRgiVKxf2CqyQEyfdGZ8NanxI/qynHzIcWNvUFYASwKKNdf7tKNw2NV1WAC4Mir21saN8FBGwB/AAUEXe3fg2mRn87BQysBqnjZ0yD+wA/HbAK583Pk++7NcBSM3y71Q5Z1WJGh1LXSKPO8msIuCdussy+yA2a2OXgsfSeQHKMrIv1YMneFRlECDwnFAjWVc4562RzaHGkMQUKKpWk5onhuadORM4+CsaLgmBYXPIvpQg3O1wPakW+RHW+sinjaWubw3AH1VWQ+OlMsz1AAAAAElFTkSuQmCC"/>
                  </svg>
                  <div className="number-phone">
                    <a href="tel:734-665-1852">(734) 665-1852</a>
                  </div>
                  <div className="place">62 Big Tree St, Livonia, New York 14487, USA</div>
                  <div className="mail">
                    <a href="mailto:customer_support@example.com">customer_support@example.com</a>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15" height="14" viewBox="0 0 15 14">
                    <image data-name=" copy" width="15" height="14" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAA6klEQVQokYWTvRGDMAyFHxwLkBGgoKJiBRghjGBGSEZIRkhGSEZIRgiVKxf2CqyQEyfdGZ8NanxI/qynHzIcWNvUFYASwKKNdf7tKNw2NV1WAC4Mir21saN8FBGwB/AAUEXe3fg2mRn87BQysBqnjZ0yD+wA/HbAK583Pk++7NcBSM3y71Q5Z1WJGh1LXSKPO8msIuCdussy+yA2a2OXgsfSeQHKMrIv1YMneFRlECDwnFAjWVc4562RzaHGkMQUKKpWk5onhuadORM4+CsaLgmBYXPIvpQg3O1wPakW+RHW+sinjaWubw3AH1VWQ+OlMsz1AAAAAElFTkSuQmCC"/>
                  </svg>
                  <ul className="time">
                    <li><span>Monday – Friday:</span> 8.00am – 21.00pm</li>
                    <li><span>Saturday – Sunday :</span> 9.00am – 22.00pm</li>
                    <li><span>Holiday:</span> Closed</li>
                  </ul>
                  <div className="widget-social justify-center style-2">
                    <ul className="">
                      <li><a href="#" className="icon-fb"></a></li>
                      <li><a href="#" className="icon-twitter"></a></li>
                      <li><a href="#" className="icon-instagram"></a></li>
                      <li><a href="#" className="icon-pinterest"></a></li>
                      <li><a href="#" className="icon-skype"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /header-left */}
          <nav className="main-nav left">
            <ul className="menu-primary-menu">
              {NAV_LEFT.map((item) => (
                <li
                  key={item.label}
                  className={`menu-item${item.hasChildren ? " menu-item-has-children" : ""}${
                    item.current ? " current-menu-item" : ""
                  }`}
                >
                  <a href={item.href}>{item.label}</a>
                  {item.children && (
                    <ul className="sub-menu">
                      {item.children.map((child) => (
                        <li className="menu-item" key={child.label}>
                          <a href={child.href}>{child.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* /main-nav */}
          <div id="site-logo">
            <div id="site-logo-inner">
              <a href="/index-2.html" rel="home" className="main-logo">
                <img
                  id="logo_header"
                  alt=""
                  src="/images/logo/logo.png"
                  data-retina="/images/logo/logo@2x.png"
                />
              </a>
            </div>
          </div>
          {/* /logo */}
          <nav className="main-nav right">
            <ul className="menu-primary-menu">
              <li className="menu-item menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  {NAV_RIGHT_PAGES_CHILDREN.map((child) => (
                    <li className="menu-item" key={child.label}>
                      <a href={child.href}>{child.label}</a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  {NAV_RIGHT_BLOG_CHILDREN.map((child) => (
                    <li className="menu-item" key={child.label}>
                      <a href={child.href}>{child.label}</a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="menu-item">
                <a href="/contact.html">Contact</a>
              </li>
            </ul>
          </nav>
          {/* /main-nav */}
          <div className="header-right">
            <div className="header-search relative">
              <a
                href="#"
                className="show-search"
                onClick={(e) => {
                  e.preventDefault();
                  setSearchActive((v) => !v);
                }}
              >
                <i className="icon-search"></i>
              </a>
              <div className={`top-search${searchActive ? " active" : ""}`}>
                <form className="search-form relative" onSubmit={(e) => e.preventDefault()}>
                  <fieldset className="search">
                    <input
                      type="search"
                      placeholder="Search..."
                      className=""
                      name="search"
                      tabIndex="2"
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <div className="">
                    <button className="" type="submit">
                      <i className="icon-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="wg-bag">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="17" height="19" viewBox="0 0 17 19">
                <image id="shopping-bag" width="17" height="19" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAYAAAB2pebxAAABDElEQVQ4jc2RsUoDQRCGvxyxiYjEhAtG0lj5CkIKIb0PkyZt6hQ+k61CerUQC/EKQRCDIEf4w8KEbCZ7EkkKf9i7229m/p25RVJqHUoaS3qSNLP32PhGfi08nI6AW+AUuAEegAtgCBTAFfC1VpJwnkh6k9R1vGt84mtSJi+SRhVjjiy+xjM/C9ADHhMc4z0Pl//kGTgxdgx8A2XC5ABoAJ+2/wDOQzuZVpra173SujM6jaJZMMkjcClpLulaUuFsCuNzy1sqrwOtqN2BrR/Hsf17lLPikvruxFdJZcU4pcVj9UMnHXfiWcXNBNUT8U644vYvRduonSVm/6tae+sk39Ek/1/j7MWkuZMFNBdxsnqKklujVAAAAABJRU5ErkJggg=="/>
              </svg>
              <span className="number">{CART_ITEMS.length}</span>
              <div className="bag-box">
                {CART_ITEMS.map((item, idx) => (
                  <div
                    className={`cart-item${item.isLast ? " last" : ""}`}
                    key={item.id}
                  >
                    <div className={`image${idx === 0 ? " style-1" : ""}`}>
                      <img src={item.image} alt="" />
                    </div>
                    <div className="content">
                      <div className="price">
                        {item.hasOldPrice ? (
                          <>
                            <span>{item.oldPrice}</span> {item.price}
                          </>
                        ) : (
                          item.price
                        )}
                      </div>
                      <div className="name">
                        <a href="#">{item.name}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* /header-right */}
        </div>
      </div>
      <div className={`mobile-nav-wrap${mobileNavActive ? " active" : ""}`}>
        <div
          className="overlay-mobile-nav"
          onClick={() => setMobileNavActive(false)}
        ></div>
        <div className="inner-mobile-nav">
          <a href="/index-2.html" rel="home" className="main-logo">
            <img
              id="mobile-logo_header"
              alt=""
              src="/images/logo/logo-dark.png"
              data-retina="/images/logo/logo-dark@2x.png"
            />
          </a>
          <div
            className="mobile-nav-close"
            onClick={() => setMobileNavActive(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="white" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 122.878 122.88" style={{ enableBackground: "new 0 0 122.878 122.88" }} xmlSpace="preserve">
              <g>
                <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z"></path>
              </g>
            </svg>
          </div>
          <nav id="mobile-main-nav" className="mobile-main-nav">
            <ul id="menu-mobile-menu" className="menu">
              <li className="menu-item menu-item-has-children-mobile">
                <a
                  className="item-menu-mobile"
                  onClick={() => toggleMobileSubmenu("Home")}
                >
                  Home
                </a>
                <ul
                  className={`sub-menu-mobile${openMobileSubmenu === "Home" ? " active" : ""}`}
                >
                  <li className="menu-item"><a href="/index-2.html">Home 1</a></li>
                  <li className="menu-item"><a href="/home-2.html">Home 2</a></li>
                </ul>
              </li>
              <li className="menu-item current-menu-item">
                <a className="item-menu-mobile" href="/menu.html">Menu</a>
              </li>
              <li className="menu-item">
                <a className="item-menu-mobile" href="/reservation.html">Reservation</a>
              </li>
              <li className="menu-item menu-item-has-children-mobile">
                <a
                  className="item-menu-mobile"
                  onClick={() => toggleMobileSubmenu("Pages")}
                >
                  Pages
                </a>
                <ul
                  className={`sub-menu-mobile${openMobileSubmenu === "Pages" ? " active" : ""}`}
                >
                  {NAV_RIGHT_PAGES_CHILDREN.map((child) => (
                    <li className="menu-item" key={child.label}>
                      <a href={child.href}>{child.label}</a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="menu-item menu-item-has-children-mobile">
                <a
                  className="item-menu-mobile"
                  onClick={() => toggleMobileSubmenu("Blog")}
                >
                  Blog
                </a>
                <ul
                  className={`sub-menu-mobile${openMobileSubmenu === "Blog" ? " active" : ""}`}
                >
                  {NAV_RIGHT_BLOG_CHILDREN.map((child) => (
                    <li className="menu-item" key={child.label}>
                      <a href={child.href}>{child.label}</a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="menu-item">
                <a href="/contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}