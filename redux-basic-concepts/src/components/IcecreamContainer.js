import React from 'react'
import {connect} from 'react-redux'
import { buyIceCream } from '../redux'

function IcecreamContainer(props) {
  return (
    <div>
        <h4>========================== Ice Cream Container ===========================</h4>
        <h2>Number of icecreams {props.numberOfIceCreams}</h2>
        <button onClick={props.buySomeIceCreams}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        numberOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buySomeIceCreams: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer)