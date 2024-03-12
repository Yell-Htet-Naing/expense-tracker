import './Card.css';

function Card(props) {
    // using props.children can effect children element's css so we write custom clsses
  const classes = 'card ' + props.className;
  
  return <div className={classes}>{props.children}</div>;
}

export default Card;