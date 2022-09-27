import { useReducer } from "react";

const initialState = {
    counter: 0
}

function reducer(state,action) {
    switch (action.type) {
        case "INC":
            return {...state, counter: state.counter + 1}
        case "DEC":
            return {...state, counter: state.counter - 1}
        case "INC5":
            return {...state,counter:state.counter + action.payload}
        default:
            return state
    }
}

function useGlobalState() {
    const [state , dispatch] = useReducer(reducer,initialState)

    return {state,dispatch}
}

export default useGlobalState;