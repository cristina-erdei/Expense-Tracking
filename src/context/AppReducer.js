function AppReducer(state, action) {
    switch (action.type) {
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)
            };
        case "ADD_TRANSACTION":
            return{
                ...state,
                transactions: [{id: state.nextId, ...action.payload},...state.transactions],
                nextId: state.nextId + 1,
            }
        default:
            return state;
    }
}

export default AppReducer;

