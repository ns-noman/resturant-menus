'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const menuItems = [
  {
    image: '/images/box-item/menu-item-1.jpg',
    title: 'Marbled Iced Latte',
    text: 'Condensed Milk, Ice cubs, Espresso',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    delay: undefined,
  },
  {
    image: '/images/box-item/menu-item-2.jpg',
    title: 'Marbled Iced Latte',
    text: 'Condensed Milk, Ice cubs, Espresso',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    delay: '0.1s',
  },
  {
    image: '/images/box-item/menu-item-3.jpg',
    title: 'Marbled Iced Latte',
    text: 'Condensed Milk, Ice cubs, Espresso',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    delay: '0.2s',
  },
  {
    image: '/images/box-item/menu-item-1.jpg',
    title: 'Marbled Iced Latte',
    text: 'Condensed Milk, Ice cubs, Espresso',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    delay: undefined,
  },
];

export default function MenuSection() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="wg-menu">
      <img className="item-1" src="images/item-background/item-4.png" alt="" />
      <img className="item-2" src="images/item-background/item-6.png" alt="" />
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section style-1 text-center mb-55">
              <span className="sub wow fadeInUp sub-before sub-after">
                special coffee menu
              </span>
              <div className="main wow fadeInUp">definite coffee you must try</div>
            </div>
          </div>

          <div className="col-12">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              observer={true}
              observeParents={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // Attach the external nav buttons before Swiper initializes
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
            >
              {menuItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="wg-menu-item wow fadeInUp" data-wow-delay={item.delay}>
                    <div className="image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="title">
                      <a href="#">{item.title}</a>
                    </div>
                    <div className="text">{item.text}</div>
                    <p>{item.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div ref={navigationNextRef} className="swiper-button-next news-next style-1"></div>
            <div ref={navigationPrevRef} className="swiper-button-prev news-prev style-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}