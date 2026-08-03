import Link from "next/link";

export default function Service() {
  const services = [
    {
      title: "Coffee",
      image: "/images/box-item/cup-caffee.jpg",
      icon: "icon-coffee-cup",
      delay: "0s",
    },
    {
      title: "Bakery",
      image: "/images/box-item/bakery.jpg",
      icon: "icon-bread",
      delay: "0.1s",
    },
    {
      title: "Breakfast",
      image: "/images/box-item/breakfast.jpg",
      icon: "icon-croissant",
      delay: "0.2s",
    },
  ];

  return (
    <div className="wg-service">
      <div className="themesflat-container">
        <div className="row justify-center">
          {services.map((service) => (
            <div className="col-md-4 col-12" key={service.title}>
              <div
                className="service-item wow fadeInUp"
                data-wow-delay={service.delay}
              >
                <img src={service.image} alt={service.title} />

                <div className="content">
                  <i className={service.icon}></i>

                  <div className="title">
                    <Link href="#">
                      <span>-</span> {service.title} <span>-</span>
                    </Link>
                  </div>

                  <p>
                    Alienum phaedrum torquatos nec eu, vis detraxit
                    periculis ex, nihil expetendis in mei an pericula.
                    Eos ei nisl graecis, vix aperiri aequat.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}