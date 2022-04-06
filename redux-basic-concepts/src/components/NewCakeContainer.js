import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h4>======================= New Cake Container (payload) ===========================</h4>
            <h2>Number of cakes {props.numberOfCakes}</h2>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => props.buySomeCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buySomeCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)