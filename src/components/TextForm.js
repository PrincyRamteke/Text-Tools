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

  const handleLoClick = () => {
    // console.log("Lower case was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  // to convert a paragraph into points
  const handleNumberClick = () => {
    let newText = text.split(". ");
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleCopy = (event) => {
    // console.log("I am copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");
  // text = "new text here"; //wrong way to change the state;
  // setText("new text here"); //correct way to change the state;

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control my-3"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleNumberClick}>
          Convert paragraph into points
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} word and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
