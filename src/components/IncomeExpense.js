import classes from "./IncomeExpense.module.css";
import Card from "../ui/Card";
import {GlobalContext} from "../context/GlobalState";
import {useContext} from "react";

function IncomeExpense() {
    const {transactions} = useContext(GlobalContext);

    let income = transactions.reduce(
        (acc, val) => acc + (val.amount > 0 ? val.amount : 0),
        0
    );

    let expense = transactions.reduce(
        (acc, val) => acc + (val.amount < 0 ? val.amount : 0),
        0
    );

    return (
        <Card>
            <div className={classes.containerStyle}>
                <div>
                    <h4>Income</h4>
                    <p className={classes.balance + " " + classes.incomeBalance}>{income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className={classes.balance + " " + classes.expenseBalance}>{expense}</p>
                </div>
            </div>
        </Card>
    );
}

export default IncomeExpense;