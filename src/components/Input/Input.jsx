import React, { useState } from "react";
import styles from "./Input.module.css";

export const Input = ({ setData }) => {
  const [inputText, setInputText] = useState("");

  return (
    <form
      className={`${styles.input_form}`}
      onSubmit={(event) => {
        event.preventDefault();
        setData((data) => [
          { id: data.length + 1, name: inputText, favourite: false },
          ...data,
        ]);
        setInputText("");
      }}
    >
      <input
        type="text"
        className={`${styles.input_text}`}
        value={inputText}
        placeholder="Enter Friend's Name"
        onChange={(event) => setInputText(event.target.value)}
      />
      <button type="submit" className={`${styles.btn}`}>
        Add Friend
      </button>
    </form>
  );
};
