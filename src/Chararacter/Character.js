import React from 'react';

const character = (props) => {

  const style = {
    background: "pink",
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid #D4DCCD",
    width: "20px", 
    height: "20px",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "10%",
    color: "#6B717E",
  }

  return <div onClick={props.click} style={style}> {props.char} </div>
}

export default character;
