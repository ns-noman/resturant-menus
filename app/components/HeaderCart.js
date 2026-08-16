"use client";
import Link from 'next/link';
import { useState } from "react";
import Cart from '@/app/components/Cart';
import Search from '@/app/components/Search';
import { useEffect, useRef } from "react";

const menus = [
  { label: "WOODEN SPOON MENU", slug: "woodenspoon#menus-list", hasChildren: false, current: false },
  { label: "DESHI BITES MENU", slug: "db#menus-list", hasChildren: false, current: true },
  { label: "SCOOP MENU", slug: "scoop#menus-list", hasChildren: false, current: false },
  { label: "HYDRO MENU", slug: "hydro#menus-list", hasChildren: false, current: false },
];


export default function Header() {


  const canvasRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        canvasRef.current &&
        !canvasRef.current.contains(event.target)
      ) {
        setWelcomActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);


  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [welcomActive, setWelcomActive] = useState(false);

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
                  <p>Plot 1063, Block I, Bashundhara R/A,, Dhaka, Bangladesh</p>
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
                  <p>+880 1847 091102 or +880 1847 091040</p>
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
            <div className="canvas" ref={canvasRef}>
              <div className="canvas-button" onClick={() => setWelcomActive(!welcomActive)}>
                <span></span>
              </div>
              <div className={`wg-welcom ${welcomActive ? " active" : ""}`}>
                <div className="inner">
                  <div className="button-close" onClick={() => setWelcomActive(false)}>
                    <i className="icon-close"></i>
                  </div>

                  <div className="title">
                    Welcome To <br />
                    Centrum
                  </div>

                  <div className="text">
                   Where great food, warm hospitality, and unforgettable moments come together under one roof.
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                  >
                    <image
                      data-name=" copy"
                      width="15"
                      height="14"
                      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAA6klEQVQokYWTvRGDMAyFHxwLkBGgoKJiBRghjGBGSEZIRkhGSEZIRgiVKxf2CqyQEyfdGZ8NanxI/qynHzIcWNvUFYASwKKNdf7tKNw2NV1WAC4Mir21saN8FBGwB/AAUEXe3fg2mRn87BQysBqnjZ0yD+wA/HbAK583Pk++7NcBSM3y71Q5Z1WJGh1LXSKPO8msIuCdussy+yA2a2OXgsfSeQHKMrIv1YMneFRlECDwnFAjWVc4562RzaHGkMQUKKpWk5onhuadORM4+CsaLgmBYXPIvpQg3O1wPakW+RHW+sinjaWubw3AH1VWQ+OlMsz1AAAAAElFTkSuQmCC"
                    />
                  </svg>

                  <div className="number-phone">
                    <a href="tel:+8801847091102">
                      +880 1847 091102
                    </a>
                  </div>

                  <div className="place">
                    Plot 1063, Block I, Bashundhara R/A,, Dhaka, Bangladesh
                  </div>

                  <div className="mail">
                    <a href="mailto:info@centrumbd.com">
                      info@centrumbd.com
                    </a>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                  >
                    <image
                      data-name=" copy"
                      width="15"
                      height="14"
                      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAA6klEQVQokYWTvRGDMAyFHxwLkBGgoKJiBRghjGBGSEZIRkhGSEZIRgiVKxf2CqyQEyfdGZ8NanxI/qynHzIcWNvUFYASwKKNdf7tKNw2NV1WAC4Mir21saN8FBGwB/AAUEXe3fg2mRn87BQysBqnjZ0yD+wA/HbAK583Pk++7NcBSM3y71Q5Z1WJGh1LXSKPO8msIuCdussy+yA2a2OXgsfSeQHKMrIv1YMneFRlECDwnFAjWVc4562RzaHGkMQUKKpWk5onhuadORM4+CsaLgmBYXPIvpQg3O1wPakW+RHW+sinjaWubw3AH1VWQ+OlMsz1AAAAAElFTkSuQmCC"
                    />
                  </svg>

                  <ul className="time">
                    <li>
                      <span>Monday - Friday :</span> 9:00 - 22:00
                    </li>

                    <li>
                      <span>Saturday – Sunday:</span> 9.00am – 22.00pm
                    </li>

                    <li>
                      <span>Holiday:</span> Closed
                    </li>
                  </ul>

                  <div className="widget-social justify-center style-2">
                    <ul>
                      <li>
                        <a href="#" className="icon-fb"></a>
                      </li>

                      <li>
                        <a href="#" className="icon-twitter"></a>
                      </li>

                      <li>
                        <a href="#" className="icon-instagram"></a>
                      </li>

                      <li>
                        <a href="#" className="icon-pinterest"></a>
                      </li>

                      <li>
                        <a href="#" className="icon-skype"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /header-left */}
          <nav className="main-nav left">
            <ul className="menu-primary-menu">
              {menus.slice(0, 2).map((item) => (
                <li
                  key={item.label}
                  className={`menu-item${item.hasChildren ? " menu-item-has-children" : ""}${
                    item.current ? " current-menu-item" : ""
                  }`}
                >
                  <Link href={`/menus/${item.slug}`} className="nav-link px-3 py-2 rounded hover:bg-gray-100">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* /main-nav */}
          <div id="site-logo">
            <div id="site-logo-inner">
              <Link href="/" rel="home" className="main-logo">
                <img
                  style={{ border: 0 }}
                  id="logo_header"
                  alt=""
                  src="/images/logo/logo.png"
                  data-retina="/images/logo/logo@2x.png"
                />
              </Link>
            </div>
          </div>
          {/* /logo */}
          <nav className="main-nav right">
            <ul className="menu-primary-menu">
              {menus.slice(2, 4).map((item) => (
                <li
                  key={item.label}
                  className={`menu-item${item.hasChildren ? " menu-item-has-children" : ""}${
                    item.current ? " current-menu-item" : ""
                  }`}
                >
                  <Link href={`/menus/${item.slug}`} className="nav-link px-3 py-2 rounded hover:bg-gray-100">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* /main-nav */}
          <div className="header-right">
              <Search/>
              <Cart/>
          </div>
        </div>
      </div>
      <div className={`mobile-nav-wrap${mobileNavActive ? " active" : ""}`}>
        <div
          className="overlay-mobile-nav"
          onClick={() => setMobileNavActive(false)}
        ></div>
        <div className="inner-mobile-nav">
          <Link href="/" rel="home" className="main-logo">
            <img
              id="mobile-logo_header"
              alt=""
              src="/images/logo/logo-dark.png"
              data-retina="/images/logo/logo-dark@2x.png"
            />
          </Link>
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
              {menus.map((item) => (
                <li key={item.label} className="menu-item">
                  <Link
                    href={`/menus/${item.slug}`}
                    className="item-menu-mobile"
                    onClick={() => setMobileNavActive(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}