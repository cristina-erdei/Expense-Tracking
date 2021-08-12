import classes from "./Card.module.css";

function Card(props) {
    return (
        <div className={classes.cardStyle + " " + props.extraClasses}>
            {props.children}
        </div>
    );
}

export default Card;