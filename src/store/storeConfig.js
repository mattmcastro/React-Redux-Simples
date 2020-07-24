import {createStore, combineReducers} from 'redux'
import numReducer from './reducers/numerosReducer'
const reducers = combineReducers ({
    numeros: numReducer,
})
function storeConfig(){
    return createStore(reducers)
}

export default storeConfig