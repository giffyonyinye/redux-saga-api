export const getItem = () => {
    return {
        type: "GET_ITEM"
        
    }
};
export const setItem = (payload) => {
    return {
        type: "SET_ITEM",
        payload
    }
};
 