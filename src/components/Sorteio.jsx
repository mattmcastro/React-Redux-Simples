
import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'
function Aleatorio(props){
    const {min, max} = props
    const ran = parseInt((Math.random()*(max - min)) + min)
    return(
        <Card title= "Sorteio de um numero" Blue>
            <div>
            <span>
                <strong>Resultado:</strong>
                <strong>{ran}</strong>
            </span>
            </div>
        </Card>
    )
}
function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}
export default connect(mapStateToProps)(Aleatorio)