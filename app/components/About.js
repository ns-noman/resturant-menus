import Link from "next/link";

export default function About() {
  const openingHours = [
    { day: "MONDAY", time: "7:00 - 21:00" },
    { day: "TUESDAY", time: "7:00 - 21:00" },
    { day: "WEDNESDAY", time: "7:00 - 21:00" },
    { day: "THURSDAY", time: "7:00 - 21:00" },
    { day: "FRIDAY", time: "8:00 - 21:00" },
    { day: "SATURDAY", time: "7:00 - 21:00" },
    { day: "SUNDAY", time: "CLOSED", active: true },
  ];

  return (
    <div className="wg-about">
      <div className="themesflat-container full">
        <div className="row">
          <div className="col-12">
            <div className="wrap">

              {/* Image */}
              <div className="image wow fadeInLeft">
                <img
                  src="/images/box-item/about-3.jpg"
                  alt="Coffee shop"
                />
              </div>

              {/* Content */}
              <div className="content">
                <div className="heading-section">
                  <span className="sub sub-before wow fadeInUp">
                    coffee shop since 2003
                  </span>

                  <div className="main wow fadeInUp">
                    We are not your <br />
                    average coffee shop
                  </div>
                </div>

                <p className="wow fadeInUp">
                  We offer some of the best locally roasted coffee using
                  “Brazilian Santos” beans. Enjoy Dark, Blonde, Jamaican,
                  Italian &amp; Decaf roasts. Also available are our specialty
                  Lattes, Frappes, Mochas, Cappuccinos, Americanos &amp; more …
                </p>

                <p className="wow fadeInUp">
                  To see more of our coffee, specialty drinks &amp; food menus,
                  please click the link below. There are many variations of
                  passages of lorem ipsum available but the majority have
                  suffered alteration in some form by injected.
                </p>

                <Link
                  href="#"
                  className="button-style-1 wow fadeInUp"
                >
                  CLICK TO READ MORE
                </Link>
              </div>

              {/* Opening Hours */}
              <div className="hour-opening">
                <div className="title">HOUR OPENING</div>

                <ul>
                  {openingHours.map((item) => (
                    <li key={item.day}>
                      <div className="day">{item.day}</div>

                      <div className="line"></div>

                      <div
                        className={`time ${
                          item.active ? "active" : ""
                        }`}
                      >
                        {item.time}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}