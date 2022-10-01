import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { ordered, restocked } from './icecreamSlice';

const IcecreamView = () => {
    const [value, setValue] = useState(1);
    const numOfIcecreams = useAppSelector((state) => state.icecream.numOfIceCreams);
    const dispatch = useAppDispatch();
    return (
        <div>
            <h2>Number of Ice Creams - {numOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order Ice Creams</button>
            <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            <button onClick={() => dispatch(restocked(value))}>Restock Ice Creams</button>
        </div>
    )
}

export default IcecreamView