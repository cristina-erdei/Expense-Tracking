import React from "react";
import {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";


const initialState = {
    transactions: [],
    nextId: 1,
}

export const GlobalContext = createContext(initialState);

function GlobalContextProvider(props) {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:"ADD_TRANSACTION",
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider
