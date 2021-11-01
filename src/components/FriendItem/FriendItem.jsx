import React from "react";
import styles from "./FriendItem.module.css";

export const FriendItem = ({ friend, toggleFavourite, removeFriend }) => {
  return (
    <div className={`${styles.friend_data}`} key={friend.id}>
      <div>
        <p>{friend.name} </p>
        <p>is your friend</p>
      </div>

      <div>
        {friend.favourite ? (
          <span
            class="material-icons-outlined"
            onClick={() => toggleFavourite(friend.id)}
          >
            star
          </span>
        ) : (
          <span
            class="material-icons-outlined"
            onClick={() => toggleFavourite(friend.id)}
          >
            star_border
          </span>
        )}
        <span
          class="material-icons-outlined"
          onClick={() => removeFriend(friend.id)}
        >
          delete
        </span>
      </div>
    </div>
  );
};
