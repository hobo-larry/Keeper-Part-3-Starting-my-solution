import React, { useState } from "react";
import Note from "./Note";
function CreateArea() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [addToArr, setAddToArr] = useState([]);
  function handleTitle(event) {
    const inputTitle = event.target.value;

    setTitle(inputTitle);
  }
  function handleBody(event) {
    const inputBody = event.target.value;

    setBody(inputBody);
  }
  function handleClick(e) {
    e.preventDefault();
    setAddToArr((prevValue) => {
      return [...prevValue, { title, body }];
    });

    setBody("");
    setTitle("");
  }
  function deleteNote(id) {
    setAddToArr((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleTitle}
          value={title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleBody}
          value={body}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
      {addToArr.map((x, index) => (
        <Note
          key={index}
          id={index}
          title={x.title}
          content={x.body}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}

export default CreateArea;
