import React, { useState, useContext } from "react";
import Context from "../context";
import { newMessage } from "../state/actions";

function PublishMessage() {
  const { dispatch } = useContext(Context);

  const [text, setText] = useState("");

  const updateText = (event) => {
    setText(event.target.value);
  };

  const publishMessage = (event) => {
    // event.preventDefault();
    dispatch(newMessage(text));
    setText("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") publishMessage();
  };

  return (
    <div>
      <h3>Got something to say?</h3>
      <input value={text} onChange={updateText} onKeyPress={handleKeyPress} />
      <button onClick={publishMessage}>Publish it!</button>
    </div>
  );
}

export default PublishMessage;
