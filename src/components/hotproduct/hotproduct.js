import React, { Component } from 'react';
import banner from '../../assets/banner.jpg';
class HotProduct extends Component {
    render() {
    
        return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="bestseller">
                        <div className="divided-line">
                            <span className="title">Sản phẩm mới nhất</span>
                        </div>
                    </div>
                </div>
                <div className="row mt-30">
                    {this.props.children}
                </div>
            </div>
            <div className="banner">
                <img src={banner} alt=""/>
            </div>
        </div>
        );
    }
}

export default HotProduct;
