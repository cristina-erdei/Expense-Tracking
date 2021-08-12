import React from "react";
import Card from "../../ui/Card";
import classes from "./TransactionHistory.module.css";
import {GlobalContext} from "../../context/GlobalState";
import {useContext} from "react";
import TransactionHistoryItem from "./TransactionHistoryItem";

function TransactionHistoryList() {
    const {transactions} = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            {transactions.length === 0 ?
                <h4>You have no transactions</h4> :
                < ul className={classes.transactionList}>
                    {transactions.map(transaction => (
                        <TransactionHistoryItem
                            key={transaction.id}
                            id={transaction.id}
                            name={transaction.name}
                            amount={transaction.amount}
                        />
                    ))}

                </ul>
            }
        </div>
    )
        ;
}

export default TransactionHistoryList;
