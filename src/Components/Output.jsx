import React from "react";
import "../CSS/Output.css";

//console.log(props.data)

const Output = (props) => {
  return (
    <div>
      <div className="border-solid border border-black w-48 text-center float-left m-5">
        <img width="100%" src={props.data.image}></img>
        <h1>{props.data.item_id}</h1>
        <h5>{props.data.brand}</h5>
        <h5>{props.data.name}</h5>
        <h5>Price:{props.data.price}</h5>
        <button
          className="p-2"
          onClick={() => props.onRemove((props.data.item_id = 11))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Output;
