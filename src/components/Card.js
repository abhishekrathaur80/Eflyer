import React from "react";

const Card = ({ data }) => {
  const { title, price, image } = data;

  return (
    <div className="col-lg-4 col-sm-4">
      <div className="box_main card-container" style={{ height: "650px" }}>
        <h4 className="shirt_text">{title}</h4>
        <p className="price_text">
          Price <span style={{ color: "#262626" }}>${price}</span>
        </p>
        <div className="tshirt_img">
          <img
            className="card-image"
            style={{ height: "220px", objectFit: "cover" }}
            src={image}
            alt={title}
          />
        </div>
        <div className="btn_main">
          <div className="buy_bt">
            <a href="/">Buy Now</a>
          </div>
          <div className="seemore_bt">
            <a href="/">See More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
