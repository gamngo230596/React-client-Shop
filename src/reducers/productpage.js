import * as Types from '../constants/ActionTypes';
var initialState = {};
const productpage = (state=initialState, action)=>{
    switch (action.type) {
        case Types.READ_PRODUCT:
        return action.products;
        default: return state;
    }
}
export default productpage;
