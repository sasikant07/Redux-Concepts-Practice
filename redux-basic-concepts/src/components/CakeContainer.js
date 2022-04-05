import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
        <h2>Number of cakes {props.numberOfCakes}</h2>
        <button onClick={props.buySomeCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        numberOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buySomeCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)