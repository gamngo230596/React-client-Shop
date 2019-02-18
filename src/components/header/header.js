import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeClass: ''
    };
  }
  componentDidMount(){
    window.addEventListener('scroll', (event) => {
     
      var value = document.body.scrollTop;
     
      //console.log(value);
      
    });
    
}
render() {
  var {activeClass} = this.state;
 
return (
  <header className={activeClass}>
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-6 center">
          <div className="logo">
          <Link to="/">
            <img src={logo} alt=""/>
            </Link>
          </div>
        </div>
        <div className="col-md-9 col-sm-6 col-xs-6 menu-header">
          <div className="hotline">
              <a href="tel:0984529744">
                <i className="fa fa-mobile" aria-hidden="true"></i><span>0353291098</span> 
              </a>
          </div>   
        </div>
      </div>
    </div>
  </header>
);
}
}

export default Header;
