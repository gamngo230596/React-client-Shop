import React, { Component } from 'react';
import CollectionContainer from '../../containers/collectionContainer';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Menu from '../../components/menu/menu';
import Backtotop from '../../components/backtotop/backtotop';
class CollectionPage extends Component {
    render() {

        return (
            <div>
                <Header/>
            <Menu/>
                <CollectionContainer/>
                <Footer/>
    
            <Backtotop scrollStepInPx="50" delayInMs="16.66"/>
            </div>
        );
    }
}

export default CollectionPage;