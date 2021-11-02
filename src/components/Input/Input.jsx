import React, { useState } from "react";
import styles from "./Input.module.css";

export const Input = ({ setData }) => {
  const [inputText, setInputText] = useState("");
  const [showValidation, setShowValidation] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputText.length > 2) {
      setData((data) => [
        { id: data.length + 1, name: inputText, favourite: false },
        ...data,
      ]);
      setInputText("");
      setShowValidation(false);
    } else {
      setShowValidation(true);
    }
  };

  return (
    <form
      className={`${styles.input_form}`}
      onSubmit={(event) => submitHandler(event)}
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
      {showValidation && inputText.length === 0 && (
        <p className={`${styles.error}`}>Please enter a name !!</p>
      )}
      {showValidation && inputText.length < 3 && inputText.length > 0 && (
        <p className={`${styles.error}`}>
          Name cannot be less than 3 characters!!
        </p>
      )}
    </form>
  );
};
