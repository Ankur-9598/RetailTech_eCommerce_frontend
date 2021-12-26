let defaultState = {
    selectedItems: []
}

let cartReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            let newItem = action.payload;
            state.selectedItems.push(newItem);
            console.log('new state: ', state);
            return state;
        
        default:
            return state;
    }
};

export default cartReducer;