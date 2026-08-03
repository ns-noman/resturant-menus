import Link from "next/link";

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <img
                className="item-1"
                src="/images/item-background/footer-1.png"
                alt=""
            />
            <img
                className="item-2"
                src="/images/item-background/footer-2.png"
                alt=""
            />

            <div className="themesflat-container">
                <div className="row">

                    {/* Logo & Description */}
                    <div className="col-md-6 col-lg-3 logo">
                        <div className="logo-footer" id="logo-footer">
                            <Link href="/">
                                <img
                                    id="logo_footer"
                                    alt="Basilico Coffee House"
                                    src="/images/logo/logo-dark.png"
                                    data-retina="/images/logo/logo-dark@2x.png"
                                />
                            </Link>
                        </div>

                        <div className="text">
                            Welcome to our Basilico Coffee <br />
                            House. Lorem simply text amet cing elit aenean
                            feugiat. t hendrerit mi pulvinar vel.
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="col-md-6 col-lg-3 contact">
                        <div className="title-wg">Contact Us</div>

                        <ul>
                            <li>
                                <div className="text">
                                    <span>LOCATION:</span>
                                    <br />
                                    Plot 1063, Block I, Bashundhara R/A,, Dhaka, Bangladesh
                                </div>
                            </li>

                            <li>
                                <div className="text">
                                    <span>BOOK A TABLE:</span>
                                    <br />
                                    info@centrumbd.com
                                    <br />
                                    +880 1847 091102 or<br/>+880 1847 091040
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div className="col-md-6 col-lg-3 time">
                        <div className="title-wg">Hour Open</div>

                        <ul>
                            <li>
                                <div className="text">
                                    <span>Monday - Friday : </span>
                                    9:00 - 22:00
                                </div>
                            </li>

                            <li>
                                <div className="text">
                                    <span>Saturday: </span>
                                    10:00 - 23:00
                                </div>
                            </li>

                            <li>
                                <div className="text">
                                    <span>Sunday: </span>
                                    5:00 - 23:00
                                </div>
                            </li>

                            <li>
                                <div className="text">
                                    <span>Holidays: </span>
                                    Closed
                                </div>
                            </li>

                            <li>
                                <div className="text">
                                    <span>Happy Hours: </span>
                                    18:00 - 20:00
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-md-6 col-lg-3 newletters">
                        <div className="title-wg">
                            Newletters &amp; Event
                        </div>

                        <div className="text">
                            Register your email to not miss any news and offers
                            from us!
                        </div>

                        <form className="comment-form">
                            <fieldset className="email">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email address..."
                                    className="style-1"
                                    name="email"
                                    tabIndex="2"
                                    defaultValue=""
                                    aria-required="true"
                                    required
                                />
                            </fieldset>

                            <div>
                                <button type="submit">
                                    <i className="icon-send"></i>
                                </button>
                            </div>

                            <div className="check">
                                <label htmlFor="check-1" className="relative">
                                    <input
                                        id="check-1"
                                        type="checkbox"
                                        defaultChecked
                                    />
                                    <span className="btn-checkbox"></span>
                                    I agree to the Privacy Policy
                                </label>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                    >
                        <image
                            data-name=""
                            width="15"
                            height="14"
                            xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAOCAYAAADwikbvAAAA6klEQVQokYWTvRGDMAyFHxwLkBFYgdodjBBKlzBCUlC6SEZISspkhKSjDSt4Ba+QEyfdGZ8NanxI/qynHzIc2DyNFYASgFPaWP92FJ6nkS73AC4Mir2VNp18FBGwAfAAUEXe3fg2mRn87BTSshqrtBkyD6wB/HbAK583Pk++7NcBSM3y71Q5Z+0TNVqW6iKPW8ncR8A7dZdlNkFsUdq4gsdSewHK0rEv1YMneFRlECDwnFAjWVc4562RzaHGkMQUKKpWk5oHhpadORPY+isaLgmBYXPIvpQg3O1wPakW+RHW+sintKGubw3AH0hmQnn/bYKgAAAAAElFTkSuQmCC"
                        />
                    </svg>

                    <div className="text">
                        Copyright © {new Date().getFullYear()} BATL. All Rights Reserved.
                    </div>

                    <div className="widget-social">
                        <div className="text">Follow Us:</div>

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
                                <a href="#" className="icon-youtube-play"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;