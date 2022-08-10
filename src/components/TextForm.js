import React from "react";

export default function TextForm(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label for="myBox" class="form-label">
          Example textarea
        </label>
        <textarea className="form-control" id="mybox" rows="3"></textarea>
      </div>
    </div>
  );
}
