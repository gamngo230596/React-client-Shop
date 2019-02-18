import React, { Component } from 'react';
import {Route, Link } from 'react-router-dom';
class Product extends Component {
    convertToSlug(Text)
    {
        return Text
            .toLowerCase()
            .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
            .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
            .replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
            .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
            .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
            .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
            .replace(/đ/gi, 'd')
            //Xóa các ký tự đặt biệt
            .replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '')
            //Đổi khoảng trắng thành ký tự gạch ngang
            .replace(/ /gi, "-")
            //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
            //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
            .replace(/\-\-\-\-\-/gi, '-')
            .replace(/\-\-\-\-/gi, '-')
            .replace(/\-\-\-/gi, '-')
            .replace(/\-\-/gi, '-')
            //Xóa các ký tự gạch ngang ở đầu và cuối
            Text = '@' + Text + '@'
            .replace(/\@\-|\-\@|\@/gi, '')
            ;
    }
    render() {
        var { product } = this.props;
        var url = `/products/${this.convertToSlug(product.name)}/${product.id}`;
        
        return (
        <div className="col-md-3 col-sm-6 col-xs-12">
        <Route>
            <Link to={url}>
        <div className="product">
            <div className="image">
                <img src={product.imageurl} alt=""/>
            </div>
            <div className="details">
                <div className="name">{product.name}</div>
                <div className="price">{product.price} đ</div>
            </div>
        </div>
        </Link>
        </Route>
        </div>
        );
    }
}

export default Product;
