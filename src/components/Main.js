import React, { useState, useEffect } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Card from "./Card";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="fashion_section">
        <div id="main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <h1 className="fashion_taital">Man & Woman Fashion</h1>
                <div className="fashion_section_2">
                  <div className="row">
                    {products.length > 0 &&
                      products.map((product) => (
                        <Card key={product.id} data={product} />
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#main_slider"
              role="button"
              data-slide="prev"
            >
              <FaAngleLeft />
            </a>
            <a
              className="carousel-control-next"
              href="#main_slider"
              role="button"
              data-slide="next"
            >
              <FaAngleRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
