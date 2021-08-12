import {GlobalContext} from "../context/GlobalState";
import {useContext} from "react";

function Balance() {
    const {transactions} = useContext(GlobalContext);

    const balance = transactions.reduce(
        (acc, val) => {return acc+val.amount},
        0
    );
    return (
        <div>
            <h4>
                Your Balance
            </h4>
            <h2 id="balance"> {balance}</h2>
        </div>
    );
}
export default Balance;