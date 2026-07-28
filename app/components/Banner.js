
import Link from "next/link";

export default function Home() {
  return (
    <div className="banner-page menu-page">
      <img
        className="item-1"
        src="/images/bg-section/cup.png"
        alt="Coffee cup"
      />

      <img
        className="item-2"
        src="/images/bg-section/cup-1.png"
        alt="Coffee cup decoration"
      />

      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="text">
              - Good coffee Makes Basilico -
            </div>

            <div className="heading">
              Our menu
            </div>

            <ul className="breadcrumbs">
              <li className="item">
                <Link href="/">
                  Home
                </Link>
              </li>

              <li className="active">
                <Link href="/menu">
                  Our menu
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}