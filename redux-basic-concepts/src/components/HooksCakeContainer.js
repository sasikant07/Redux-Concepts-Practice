import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux';

function HooksCakeContainer() {
    const numberOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
  return (
    <div>
        <h4>============================== Hooks Cake Conatiner ================================</h4>
        <h2>Num of Cakes - {numberOfCakes}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer