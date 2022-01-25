import React, { Component, Dispatch } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { removeUser } from "../stores/user.actionCreators";
import { IUser, UserState } from "../stores/user.type";

export const Info: React.FC = () => {
  const users: readonly IUser[] = useSelector(
    (state: UserState) => state.users,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const deleteUser = (user: IUser): void => {
    dispatch(removeUser(user));
  };

  return (
    <div>
      {users.map((user: IUser) => (
        <div className="User" key={user.id}>
          <div>
            <h1>{user.fullName}</h1>
            <p>{user.username}</p>
          </div>
          <button onClick={() => deleteUser(user)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
