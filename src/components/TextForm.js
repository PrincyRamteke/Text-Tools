import React, { useState } from "react";

//React hooks -  they help us use a class' features without making a class
//const [name of the variable, function with which we will be updating its value] = useState("Default value of the variable")
//You need to write this inside the function

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper case was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here...");
  // text = "new text here"; //wrong way to change the state;
  // setText("new text here"); //correct way to change the state;

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-4">
        <textarea
          className="form-control my-3"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="12"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to UPPERCASE
      </button>
    </div>
  );
}
