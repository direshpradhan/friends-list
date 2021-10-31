import React, { useState } from "react";
import { Input } from "../Input/Input";
import styles from "./FriendsListing.module.css";

export const FriendsListing = () => {
  const initialState = [
    { id: 1, name: "Rahul Gupta", favourite: false },
    { id: 2, name: "Shivangi Sharma", favourite: false },
    { id: 3, name: "Akash Singh", favourite: true },
  ];
  const [friendsData, setFriendsData] = useState(initialState);
  const [sort, setSort] = useState(false);

  const toggleFavourite = (id) => {
    const updatedData = friendsData.map((friend) => {
      if (friend.id === id) {
        friend.favourite = !friend.favourite;
      }
      return friend;
    });
    setFriendsData(updatedData);
  };

  const removeFriend = (id) => {
    const updatedData = friendsData.filter((friend) => friend.id !== id);
    setFriendsData(updatedData);
  };

  const sortByFav = (data) => {
    const newData =
      sort === true
        ? [...data].sort((a, b) => b.favourite - a.favourite)
        : data;

    return newData;
  };

  const sortedData = sortByFav(friendsData);

  return (
    <>
      <Input setData={setFriendsData} />
      <div className={`${styles.title}`}>
        <h2>Friends List</h2>
        <button onClick={() => setSort((sort) => !sort)}>
          Sort By Favourites
        </button>
      </div>
      {/* <input type="search"  /> */}
      {sortedData.map((friend) => {
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
      })}
    </>
  );
};
