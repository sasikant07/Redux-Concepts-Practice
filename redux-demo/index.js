const redux = require('redux');
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const middleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

// Actions
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// Action creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'  // payload
        // quantity: 1
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

// state of our application

// const initialState = {
//     numOfCakes: 10
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIcecreamState = {
    numOfIceCream: 20
}

// reducer function
// Reducer = (state, action) => returns newSatate

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }

//         default: return state;
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state;
    }
}

const iceCreamReducer = (state = initialIcecreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }

        default: return state;
    }
}

// Combining multiple reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// Store

// create a store
// const store = createStore(reducer)
const store = createStore(rootReducer, middleware(logger))

// store now exposes the getState() method()
console.log('Initial state : ', store.getState());

/* ======= subscribe the store to get the application state ======= */
// store.subscribe(() => console.log('Update state', store.getState()));
// const unSubscribe = store.subscribe(() => {});
const unSubscribe = store.subscribe(() => console.log('Update state', store.getState()));

// update the store by dispatching an action
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

// unsubscribe the store
unSubscribe()