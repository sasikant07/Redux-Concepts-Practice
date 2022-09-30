const { createStore } = require("redux");
const produce = require('immer').produce;

// state
const initialState = {
    name: 'Vishwas',
    address: {
        street: '123 Main St.',
        city: 'Boston',
        state: 'MA'
    }
}

const STREET_UPDATED = 'STREET_UPDATED';

const updatedStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street,
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case STREET_UPDATED: 
                // return {
                //     ...state,
                //     address: {
                //         ...state.address,
                //         street: action.payload,
                //     }
                // }

                // simple way for the above code using 3rd part library 'IMMER'
                return produce(state, (draft) => {
                    draft.address.street = action.payload;
                })

        default: return state;
    }
}

const store = createStore(reducer);

console.log("Initial State ", store.getState());

const unSubscribe = store.subscribe(() => {
    console.log("Updated State ", store.getState());
});

store.dispatch(updatedStreet('456 Main St.'));
unSubscribe();