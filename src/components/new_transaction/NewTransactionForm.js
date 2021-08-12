import classes from "./NewTransactionForm.module.css";
import React from "react";
import {useRef} from "react";
import {GlobalContext} from "../../context/GlobalState";
import {useContext} from "react";

function NewTransactionForm() {
    const {addTransaction} = useContext(GlobalContext);

    const nameRef = useRef();
    const amountRef = useRef();

    function onSubmitHandler(event) {
        event.preventDefault();

        const name = nameRef.current.value;
        const amount = amountRef.current.value;

        addTransaction({
            name:name,
            amount:Number(amount)
        });

        nameRef.current.value = "";
        amountRef.current.value = "";
    }

    return (
        <div>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="name"> Name </label>
                    <input
                        id="name"
                        type="text"
                        ref={nameRef}
                        required
                        placeholder="Enter transaction name"
                    />
                </div>

                <div>
                    <label htmlFor="amount" >
                        Amount
                        <br/>
                        (negative - expense, position - income)
                    </label>
                    <input
                        id="amount"
                        type="number"
                        step="0.01"
                        ref={amountRef}
                        required
                        placeholder="Enter transaction amount"/>
                </div>
                <div>
                    <button className={classes.submitButton}>Add transaction</button>
                </div>
            </form>
        </div>
    );
}
export default NewTransactionForm;