import { combineReducers} from 'redux';
import products from './products';
import productpage from './productpage';
const appReducers = combineReducers({
    products,
    productpage
});
export default appReducers;