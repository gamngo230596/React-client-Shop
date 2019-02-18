import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAllProductRequest } from '../actions/index';
import Collection from '../components/collection/collection';
import Product from '../components/product/product';
import PropTypes from 'prop-types';

class CollectionContainer extends Component {
    componentDidMount(){
        this.props.fetchAllProduct();
    }
    showProducts(products){
        
        var result=null;
        
        if(products.length>0){  
          result=products.map((product,index)=>{
            return <Product key={index} product={product}/>
          });
        }
        return result;
      }
    render() {
        var { products } = this.props;
        return (
        <Collection>
            {this.showProducts(products)}
        </Collection>
        );
    }
}
CollectionContainer.propTypes={
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        imageurl: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    })).isRequired
    
}
const mapStateToProps = state =>{
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        fetchAllProduct: ()=>{
            dispatch(actAllProductRequest());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CollectionContainer);