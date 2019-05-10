import React, { Component } from "react";
const date = new Date();
import Link from "next/link";
import "../../scss/index.scss";
class Footer extends Component {
  constructor(props) {
    super(props);
    // … Other code goes here

    // Bind your handler in the constructor to create
    // a single bound function
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    // Now, you can use the function without calling .bind at this point
    document.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    // Thus, the same function is referenced to properly unbind it
    document.removeEventListener("scroll", this.handleScroll);
  }
  onScroll() {
    console.log("scroll in about page");
  }

  /*=====================
     Tap on Top
     ==========================*/
  handleScroll = () => {
    if (document.documentElement.scrollTop > 600) {
      document.querySelector(".tap-top").style = "display: block";
    } else {
      document.querySelector(".tap-top").style = "display: none";
    }
  };

  clickToTop() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }

  render() {
    let backcolor = { background: "#eeeeee" };
    let tap_to_top = { display: "none" };
    return (
      <footer className="footer-light">
        <div className="light-layout">
          <div className="container">
            <section className="small-section border-section border-top-0">
              <div className="row">
                <div className="col-lg-6">
                  <div className="subscribe">
                    <div>
                      <h4>NEWSLETTER, DISCOUNTS AND EVENTS!</h4>
                      <p>
                        Never Miss Anything From 1-800-Battery By Signing Up To
                        Our Newsletter.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form className="form-inline subscribe-form">
                    <div className="form-group mx-sm-3">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter your email"
                      />
                    </div>
                    <button type="submit" className="btn btn-solid">
                      subscribe
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="section-b-space light-layout">
          <div className="container">
            <div className="row footer-theme partition-f">
              <div className="col-lg-4 col-md-6">
                <div className="footer-title footer-mobile-title">
                  <h4>about</h4>
                </div>
                <div className="footer-contant">
                  <div className="footer-logo">
                    <Link
                      href={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                    >
                      <a>
                          <img src="/static/assets/images/icon/logo.jpg" alt="" /></a>
                    </Link>
                  </div>
                  <p>
                    The largest Battery Marketplace in North America. Over
                    10,000 products, 250,000 locations, and 1,000,000
                    Applications Served. From Cars to Coin Cells we have
                    everything available.{" "}
                  </p>
                  <div className="footer-social">
                    <ul>
                      <li>
                        <Link href={'https://www.facebook.com/1800battery"'}><a>
                            <i className="fa fa-facebook" aria-hidden="true" /></a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"https://twitter.com/1800battery"}><a>
                            <i className="fa fa-twitter" aria-hidden="true" /></a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"https://instagram.com/1800battery"}><a>
                            <i className="fa fa-instagram" aria-hidden="true" /></a>
                        </Link>
                      </li>
                      <li>
                        <Link href={"https://youtube.com/channel/1800battery"}><a>
                          <i
                            className="fa fa-youtube-play"
                            aria-hidden="true"
                          /></a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col offset-xl-1">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>MY ACCOUNT</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <Link href={`${process.env.PUBLIC_URL}/login`}>
                            <a>Login</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={`${process.env.PUBLIC_URL}/register`}>
                          <a>Register</a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`${process.env.PUBLIC_URL}/pages/dashboard`}
                        >
                            <a>My Orders</a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`${
                            process.env.PUBLIC_URL
                          }/pages/forget-password`}
                        >
                            Forgot Password
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>QUESTIONS</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <a href="#">shipping & returns</a>
                      </li>
                      <li>
                        <a href="#">Frequently Asked Questions</a>
                      </li>
                      <li>
                        <a href="#">Providers & Retailers</a>
                      </li>
                      <li>
                        <a href="#">Manufacturers or Brands</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>CONTACT US</h4>
                  </div>
                  <div className="footer-contant">
                    <ul className="contact-list">
                      <li>
                        <a className="fa fa-map-marker" />
                        3857 Birch St. Newport Beach, CA 92660
                      </li>
                      <li>
                        <a className="fa fa-phone" />
                        Call Us: (800)228-8379
                      </li>
                      <li>
                        <a className="fa fa-envelope" />
                        Email Us: <a href="mailto:${info@1800battery.com`}" />
                      </li>
                      <li>
                        <a className="fa fa-fax" />
                        Fax: (800)228-8379
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="sub-footer ">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="footer-end">
                  <p>
                    <a className="fa fa-copyright" aria-hidden="true" />
                    Copyright &copy; {date.getFullYear()} 1-800-Battery Inc All
                    Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="payment-card-bottom">
                  <ul>
                    <li>
                      <a href="#">
                        <img src="/static/assets/images/icon/visa.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/static/assets/images/icon/mastercard.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/static/assets/images/icon/paypal.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/static/assets/images/icon/american-express.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/static/assets/images/icon/discover.png"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tap-top top-cls"
          onClick={this.clickToTop}
          style={tap_to_top}
        >
          <div>
            <a className="fa fa-angle-double-up" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
