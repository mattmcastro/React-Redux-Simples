
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

function Media(props) {
    const { min, max } = props
    console.log(props.min, props.max)

    return (
        <Card title="Media dos numeros" Green>
            <div>
                <span>
                    <strong>Resultado:</strong>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}
function mapStateToProps(state) {
    return {
        //ou
        //  stateAtual: state.numeros
        min: state.numeros.min,
        max: state.numeros.max
    }
}
export default connect(mapStateToProps)(Media)