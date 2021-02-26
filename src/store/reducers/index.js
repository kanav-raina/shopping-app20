import { combineReducers} from 'redux';
import { cartReducer } from './cartReducer';
import sampleReducer from './sampleReducer'
import {productReducer} from './productReducer'
import authReducer from './auth/authReducer'

const rootReducer= combineReducers({
    sample:sampleReducer,
    cart:cartReducer,
    products:productReducer,
    auth:authReducer
})

export default rootReducer;