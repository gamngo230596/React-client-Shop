import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actReadOneProductRequest } from '../actions/index';
import Products from '../components/product/productpage';


class ProductContainer extends Component {
    componentDidMount(){
        var {match} = this.props;
        var id = parseInt(match.params.id,10);
        this.props.fetchProduct(id);
    }
    render() {
        var { products } = this.props;
        return (
        <Products product = {products}>
           
        </Products>
        );
    }
}

const mapStateToProps = state =>{
    return {
        products: state.productpage
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        fetchProduct: (id)=>{
            dispatch(actReadOneProductRequest(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);