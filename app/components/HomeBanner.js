"use client";

import Link from "next/link";

export default function HomeBanner() {
  return (
    <div className="page-title-home relative">
      <div
        className="swiper-container style-2"
        data-swiper={JSON.stringify({
          spaceBetween: 0,
          slidesPerView: "1",
          effect: "fade",
          observer: true,
          observeParents: true,
          pagination: {
            el: ".page-title-pagination",
            clickable: true,
          },
        })}
      >
        <div className="swiper-wrapper">

          {/* Slide 1 */}
          <div className="swiper-slide">
            <div className="page-title slide-1">
              <div className="sub-title wow fadeInUp">
                - Welcome to Basilico Coffee Shop -
              </div>

              <div
                className="title wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Our passion is in our coffee
              </div>

              <div
                className="text wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Harbourfront Seafood Restaurant is the perfect spot in Sydney
                to celebrate a special occasion <br />
                or to simply head out for a bite to eat.
              </div>

              <div
                className="buttons wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <Link href="/menu" className="button-style-2">
                  VIEW ALL MENU
                </Link>

                <Link
                  href="/reservation"
                  className="button-style-2 active"
                >
                  BOOK A TABLE
                </Link>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="swiper-slide">
            <div className="page-title slide-2">
              <div className="sub-title wow fadeInUp">
                - Fresh Coffee For Afresh Morning -
              </div>

              <div
                className="title wow fadeInUp"
                data-wow-delay="0.1s"
              >
                relax, drink some coffee.
              </div>

              <div
                className="text wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Harbourfront Seafood Restaurant is the perfect spot in Sydney
                to celebrate a special <br />
                occasion or to simply head out for a bite to eat.
              </div>

              <div
                className="buttons wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <Link href="/menu" className="button-style-2">
                  VIEW ALL MENU
                </Link>

                <Link
                  href="/reservation"
                  className="button-style-2 active"
                >
                  BOOK A TABLE
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Pagination */}
        <div className="swiper-pagination page-title-pagination style-2"></div>
      </div>
    </div>
  );
}