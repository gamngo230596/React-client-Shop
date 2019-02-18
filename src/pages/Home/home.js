import React, { Component } from 'react';
import Slider from '../../components/slider/slider';
import NewProductContainer from '../../containers/NewProductContainer';
import Feedback from '../../components/feedback/feedback';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Menu from '../../components/menu/menu';
import Backtotop from '../../components/backtotop/backtotop';
class HomePage extends Component {
   
    
    render() {
      
        return (
            <div>
                <Header/>
                <Menu/>
                <Slider/>
                <NewProductContainer/>
                <Feedback/>
                <Footer/>
    
            <Backtotop scrollStepInPx="50" delayInMs="16.66"/>
            </div>
        );
    }
}

export default HomePage;
