// import React from 'react'
import { createContext, useEffect, useState } from "react";
export const userContextObj = createContext();

function UserContext({ children }) {
  const [currentUser, setCurrentUser] = useState([]);
  const [removedUser, setRemovedUser] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/Users`)
      .then((res) => res.json())
      .then((userList) => {
        setCurrentUser(userList);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const addRemovedUser = (user) => {
    setRemovedUser((prevRemoved) => [...prevRemoved, user]);
  };
  const restoreUser = (userId) => {
    // Find the user in removedUsers
    const userToRestore = removedUser.find((user) => user.id === userId);
    if (userToRestore) {
      // Remove the user from removedUsers
      setRemovedUser((prevRemovedUsers) =>
        prevRemovedUsers.filter((user) => user.id !== userId)
      );
      // Add the user back to currentUser
      setCurrentUser((prevUsers) => [...prevUsers, userToRestore]);
    }
  };
  return (
    <div>
      <userContextObj.Provider
        value={{
          currentUser,
          setCurrentUser,
          removedUser,
          setRemovedUser,
          addRemovedUser,
          restoreUser,
        }}
      >
        {children}
      </userContextObj.Provider>
    </div>
  );
}

export default UserContext;
