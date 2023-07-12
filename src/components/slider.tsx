"use client";

import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export default class NextJsCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel
          showStatus={false}
          stopOnHover={true}
          showThumbs={false}
          dynamicHeight={true}
          infiniteLoop={true}
          interval={3000}
          autoFocus={true}
        >
          <div>
            <img
              src="https://th.bing.com/th/id/R.1f83feec7b77f6a4a26d47fa26bcf759?rik=M6Sld3oK32UJKA&pid=ImgRaw&r=0"
              alt="image1"
            />
          </div>
          <div>
            <img
              src="https://www.humaverse.com/wp-content/uploads/2018/10/under-1533351300955.jpg"
              alt="image2"
            />
          </div>
          <div>
            <img
              src="https://diversecharters.org/wp-content/uploads/2020/07/schoolkids-scaled.jpg"
              alt="image3"
            />
          </div>
          <div>
            <img
              src="https://sharemylesson.com/sites/default/files/blog/shutterstock_351139106.jpg"
              alt="image4"
            />
          </div>
          <div>
            <img
              src="https://fthmb.tqn.com/eV5ZZlp0Htr5Ro5tyPyUqNBTbHw%3d/3865x2576/filters:fill(DBCCE8%2c1)/female-high-school-students-using-mobile-phone-during-the-class--859619092-59f88a6b6f53ba0011f32519.jpg"
              alt="image5"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}
