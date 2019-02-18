import React, { Component } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Menu from '../../components/menu/menu';
import Backtotop from '../../components/backtotop/backtotop';
class NotFoundPage extends Component {
    render() {
    
        return (
            <div>
            <Header/>
            <Menu/>
            <div className="container">
                <h1>Not Found</h1>
            </div>
            <Footer/>
    
            <Backtotop scrollStepInPx="50" delayInMs="16.66"/>
            </div>
        );
    }
}

export default NotFoundPage;
