import "./Card.css";
function Card(props) {
  const classes = "card " /* Remember the space after card*/ + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
