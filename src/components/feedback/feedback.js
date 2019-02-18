import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import Image from '../../assets/feedback.png';
class Feedback extends Component {
    render() {
        const options = {
            items: 1,
            nav: true,
            rewind: false,
            autoplay: false,
            loop: false,
            navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
        };
        
        return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="bestseller">
                        <div className="divided-line">
                            <span className="title">Phản hồi từ khách hàng</span>
                        </div>
                    </div>
                </div>
                <div className="slider-feedback">
                <OwlCarousel options={options} >
                    <div className="item">
                        <div className="description">
                        <p>Sản phẩm rất đẹp, bạn rất khéo tay! Sản phẩm rất đẹp, bạn rất khéo tay! Sản phẩm rất đẹp, bạn rất khéo tay!</p>
                        </div>
                        <div className="author">
                        <div className="image">
                            <img src={Image} alt=""/>
                        </div>
                        <div className="name">Nguyễn Thị A</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="description">
                        <p>Sản phẩm rất đẹp, bạn rất khéo tay!</p>
                        </div>
                        <div className="author">
                        <div className="image">
                        <img src={Image} alt=""/>
                        </div>
                        <div className="name">Nguyễn Thị B</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="description">
                        <p>Sản phẩm rất đẹp, bạn rất khéo tay!</p>
                        </div>
                        <div className="author">
                        <div className="image">
                        <img src={Image} alt=""/>
                        </div>
                        <div className="name">Nguyễn Thị C</div>
                        </div>
                    </div>
                </OwlCarousel>
                </div>
            </div>
        </div>
        );
    }
}

export default Feedback;
