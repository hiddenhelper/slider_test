import Slider from "react-slick";
import { imageData } from "../mock/MockData";
import SlideImage from "./SliderImage";
import "./style.css"

const SliderContainer = () => {

    // variables
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: "slides",
    };

    // render
    return (
        <Slider {...settings}>
          {imageData.map((item) => {
            return (
              <div className="wrapper" key={item.id}>
                <SlideImage data={item} />
              </div>
            );
          })}
        </Slider>
      );
}

export default SliderContainer;