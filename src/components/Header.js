import React from "react";
import {
  FaAngleRight,
  FaAngleLeft,
  FaShoppingCart,
  FaUser,
  FaSearch,
} from "react-icons/fa";

const navData = [
  "Best Sellers",
  "Gift Ideas",
  "New Releases",
  "Today Collection",
  "Customer Service",
];
const Header = () => {
  return (
    <>
      <div className="banner_bg_main">
        <div className="container">
          <div className="header_section_top">
            <div className="row">
              <div className="col-sm-10">
                <div className="custom_menu">
                  <ul>
                    {navData.map((item) => (
                      <li>
                        <a href="/">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logo_section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="logo">
                  <a href="index.html">
                    <img src="images/logo.png" alt="Logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_section">
          <div className="container">
            <div className="containt_main">
              <div id="sideNavBar" className="sideNav"></div>
              <span className="toggle_icon">
                <img src="images/toggle-icon.png" alt="Icon" />
              </span>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  All Category
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/">
                    Electronics
                  </a>
                  <a className="dropdown-item" href="/">
                    Home Appliance
                  </a>
                  <a className="dropdown-item" href="/">
                    Apparel
                  </a>
                </div>
              </div>
              <div className="main">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search this blog"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-secondary"
                      type="button"
                      style={{
                        backgroundColor: "#f26522",
                        borderColor: "#f26522",
                      }}
                    >
                      <FaSearch />
                    </button>
                  </div>
                </div>
              </div>
              <div className="header_box">
                <div className="lang_box ">
                  <a
                    href="/"
                    title="Language"
                    className="nav-link"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <img
                      src="images/flag-uk.png"
                      alt="flag"
                      className="mr-2 "
                      title="United Kingdom"
                    />{" "}
                    English{" "}
                    <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
                  </a>
                  <div className="dropdown-menu ">
                    <a href="/" className="dropdown-item">
                      <img
                        src="images/flag-france.png"
                        className="mr-2"
                        alt="flag"
                      />
                      French
                    </a>
                  </div>
                </div>
                <div className="login_menu">
                  <ul>
                    <li>
                      <a href="/">
                        <FaShoppingCart />
                        <span className="padding_10">Cart</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FaUser />
                        <span className="padding_10">User</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_section layout_padding">
          <div className="container">
            <div id="my_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="banner_taital">
                        Get Started with
                        <br />
                        Your favourite shoppings
                      </h1>
                      <div className="buynow_bt">
                        <a href="/">Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="banner_taital">
                        Get Started with
                        <br />
                        Your favourite shoppings
                      </h1>
                      <div className="buynow_bt">
                        <a href="/">Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="banner_taital">
                        Get Started with
                        <br />
                        Your favourite shoppings
                      </h1>
                      <div className="buynow_bt">
                        <a href="/">Buy Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#my_slider"
                role="button"
                data-slide="prev"
              >
                <FaAngleLeft />
              </a>
              <a
                className="carousel-control-next"
                href="#my_slider"
                role="button"
                data-slide="next"
              >
                <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
