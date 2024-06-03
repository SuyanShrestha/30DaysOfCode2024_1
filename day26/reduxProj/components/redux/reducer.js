import { ADD_TO_CART } from "./constants";

// initial state -> array maa kunai ni items xaina add nagarda
const initialState = [];

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ]
        default:
            return state;
    }
}

export default reducer;