import React, { useState } from "react";
import styles from "./Input.module.css";

export const Input = () => {
  const initialState = [
    { name: "Rahul Gupta", favourite: false },
    { name: "Shivangi Sharma", favourite: false },
    { name: "Akash Singh", favourite: true },
  ];
  const [inputText, setInputText] = useState("");
  const [friendsData, setFriendsData] = useState(initialState);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setFriendsData((data) => [{ name: inputText }, ...friendsData]);
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
