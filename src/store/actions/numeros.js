import {NUM_MIN_ALT, NUM_MAX_ALT} from './actionsTypes'
//action creator

export function alterarNumeroMin (novoNumeroMin){
    return{
        type:NUM_MIN_ALT,
        payload: novoNumeroMin
    }
}

export function alterarNumeroMax (novoNumeroMax){
    return{
        type:NUM_MAX_ALT,
        payload: novoNumeroMax
    }
}