const initialState = {
    products: [],
}
const itemReducer = (state = initialState, action) => {
    switch(action.type) {
 
        case "SET_ITEM": 
            return {
                ...state,
                products:[...state.products, action.payload]
            }
        default:
            return state
    }
};

export default itemReducer;