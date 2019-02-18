import React, { Component } from 'react';
import zalo from '../../assets/zalo.png';
class Footer extends Component {
    render() {
    
        return (
            <footer>
               <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 col-xs-12">
                                <div className="title">
                                    <h3>Về Mimi Shop</h3>
                                </div>
                                <div className="content-intro">
                                    <p>Mimi Shop nhận làm các mặt hàng handmade từ len theo yêu cầu với giá phải chăng
                                        . Vui lòng liên hệ số điện thoại hoặc facebook để đặt hàng</p>
                                    <ul>
                                        <li>
                                            <i className="fa fa-home" aria-hidden="true"></i>
                                            Ấp Bình Trị I, Thuận Mỹ, Châu Thành, Long An
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                            <a href="mailto:">ngothicamnhung11041993@gmail.com</a>
                                        </li>
                                        <li>
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                            0353291098
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-xs-12">
                                <div className="title">
                                    <h3>Liên kết</h3>
                                </div>
                                <div className="content-link">
                                    <p></p>
                                    <ul>
                                        <li>
                                           <a href="https://www.facebook.com/profile.php?id=100010152964740"><i className="fa fa-facebook-square"></i></a>  
                                        </li>
                                        <li>
                                            <a href="/"><img src={zalo} width="30" height="30" alt="zalo"/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-xs-12">
                                <div className="title">
                                    <h3>Kết nối với chúng tôi</h3>
                                </div>
                                <div className="content-connect">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>Copyright © 2018 Mimi Shop. Power by Zeros. </p> 
                </div>
            </footer>
        );
    }
}

export default Footer;
