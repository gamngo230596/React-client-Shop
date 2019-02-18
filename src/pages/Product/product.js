import React, { Component } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Menu from '../../components/menu/menu';
import Backtotop from '../../components/backtotop/backtotop';
import ProductContainer from '../../containers/productContainer';
class ProductPage extends Component {
    render() {
        var {match} = this.props;
        return (
            <div>
            <Header/>
            <Menu/>
            <ProductContainer match={match}/>
            <Footer/>
    
            <Backtotop scrollStepInPx="50" delayInMs="16.66"/>
            </div>
        );
    }
}

export default ProductPage;
