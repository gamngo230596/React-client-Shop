import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Products extends Component {
    render() {
        var { product } = this.props;
      
        return (
        <div className="productpage">
            <nav aria-label="breadcrumb" className="text-left">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item">{product.category}</li>
                    <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
                </ol>
            </nav>
           <div className="container">
           
            <div className="row">
                <div className="col-md-7">
                    <div className="image-featured">
                        <img src={product.imageurl} alt="Hình sản phẩm"/>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="product-title">{product.name}</div>
                    <div className="product-price">{product.price} đ</div>
                    <div className="product-description">{product.description}</div>
                    <div className="product-contact">
                        <div className="facebook-user"><a href="https://www.facebook.com/profile.php?id=100010152964740">Bé Nhung Facebook</a></div>
                        <div className="phone-user"><a href="tel:0353921098">Bé Nhung Phone</a></div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="bestseller">
                        <div className="divided-line">
                            <span className="title">Sản phẩm liên quan</span>
                        </div>
                    </div>
            </div>
           </div>
        </div>
      
       
        );
    }
}

export default Products;
