import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';
export const actAllProductRequest = () => {
    return (dispatch) =>{
        return callApi('product/read.php','GET',null).then(res=>{
            dispatch(actAllProduct(res.data.records));
        });
    }
}
export const actAllProduct = (products)=>{
    return {
        type: Types.ALL_PRODUCT,
        products
    }
}
export const actReadOneProductRequest = (id) => {
    var url = `product/read_one.php?id=${id}`;
    return (dispatch) =>{
        return callApi(url,'GET',null).then(res=>{ 
            dispatch(actReadOne(res.data));
        });
    }
}
export const actReadOne = (products)=>{
    return {
        type: Types.READ_PRODUCT,
        products
    }
}