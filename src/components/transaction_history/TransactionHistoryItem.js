import React from "react";
import classes from "./TransactionHistory.module.css";
import Card from "../../ui/Card";
import {GlobalContext} from "../../context/GlobalState";
import {useContext} from "react";

function TransactionHistoryItem(props) {
    const {deleteTransaction} = useContext(GlobalContext);
    return (
        <Card extraClasses={props.amount > 0 ? classes.plusTransaction : classes.minusTransaction}>
            <li>
                <button
                    className={classes.deleteItemButton}
                    onClick={() => deleteTransaction(props.id)}
                >X</button>
                {props.name}<span>{props.amount > 0 ? `+${props.amount}` : props.amount}</span>
            </li>
        </Card>
    );
}
export default TransactionHistoryItem;