import {NUM_MIN_ALT, NUM_MAX_ALT} from '../actions/actionsTypes'

const estadoInicial = {
    min:1,
    max:10
}

export default function(state = estadoInicial, action){
    switch (action.type) {
        case NUM_MIN_ALT:
            
            return{
                ...state,
                min: action.payload
            }
        case NUM_MAX_ALT:
            
            return{
                ...state,
                max: action.payload
            }
    
        default:
            return estadoInicial
    }
      
}