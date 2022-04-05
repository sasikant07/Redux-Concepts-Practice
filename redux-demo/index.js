const redux = require('redux');
const createStore = redux.createStore

// Actions
const BUY_CAKE = 'BUY_CAKE'

// Action creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'  // payload
    }
}

// state of our application

const initialState = {
    numOfCakes: 10
}

// reducer function
// Reducer = (state, action) => returns newSatate

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state;
    }
}


// Store

// create a store
const store = createStore(reducer)

// store now exposes the getState() method()
console.log('Initial state : ', store.getState());

// subscribe the store to get the application state
const unSubscribe = store.subscribe(() => console.log('Updated state : ', store.getState()));

// update the store by dispatching an action
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

// unsubscribe the store
unSubscribe()