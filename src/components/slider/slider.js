import React, { Component } from 'react';

import slider1 from '../../assets/slider_index_1.jpg';
import slider2 from '../../assets/slider_index_2.jpg';
import slider3 from '../../assets/slider_index_3.jpg';
import OwlCarousel from 'react-owl-carousel2';
class Slider extends Component {
render() {
  const options = {
    items: 1,
    nav: false,
    rewind: false,
    autoplay: true,
    loop: true
};

return (
<div className="slider-index">
<OwlCarousel ref="car" options={options}>
    <div><img src={slider1} alt=""/></div>
    <div><img src={slider2} alt=""/></div>
    <div><img src={slider3} alt=""/></div>
</OwlCarousel>
</div>

);
}
}

export default Slider;
