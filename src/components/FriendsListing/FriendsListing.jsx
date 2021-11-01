import React, { useState } from "react";
import { FriendItem } from "../FriendItem/FriendItem";
import { Input } from "../Input/Input";
import { Pagination } from "../Pagination/Pagination";
import styles from "./FriendsListing.module.css";

export const FriendsListing = () => {
  const initialState = [
    { id: 1, name: "Rahul Gupta", favourite: false },
    { id: 2, name: "Shivangi Sharma", favourite: false },
    { id: 3, name: "Akash Singh", favourite: true },
  ];
  const [friendsData, setFriendsData] = useState(initialState);
  const [sort, setSort] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(4);

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

  const search = (data) => {
    const newData = data.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    return newData;
  };

  const indexOfLastDataItem = currentPage * dataPerPage;
  const indexOfFirstDataItem = indexOfLastDataItem - dataPerPage;
  const currentData = sortedData.slice(
    indexOfFirstDataItem,
    indexOfLastDataItem
  );

  const searchData = search(currentData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Input setData={setFriendsData} />
      <div className={`${styles.main}`}>
        <div className={`${styles.title}`}>
          <h2>Friends List</h2>
          <button onClick={() => setSort((sort) => !sort)}>
            Sort By Favourites
          </button>
        </div>
        <input
          type="search"
          placeholder="Search Friends"
          className={`${styles.searchbar}`}
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        {searchData.map((friend) => {
          return (
            <FriendItem
              friend={friend}
              toggleFavourite={toggleFavourite}
              removeFriend={removeFriend}
            />
          );
        })}
        <Pagination
          dataPerPage={dataPerPage}
          data={friendsData.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};
