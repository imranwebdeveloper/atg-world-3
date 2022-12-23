import React, { useState } from "react";
const UserList = ({ users, userDetailsHandler }) => {
  const [active, setActive] = useState("1");

  const handleUser = (id) => {
    setActive(id);
    userDetailsHandler(id);
  };

  return (
    <aside className=" rounded">
      <p className="bg-blue-500 rounded-t text-white overflow-hidden uppercase text-center text-xl  py-3 font-bold">
        Users List
      </p>
      <ul className="flex flex-col  divide-y border ">
        {users.map((user, i) => (
          <li
            className={`flex   cursor-pointer  gap-2 p-2 items-center  hover:text-blue-800  overflow-hidden ${
              user.id === active && "bg-blue-50 text-blue-800"
            }`}
            key={i}
            onClick={() => handleUser(user.id)}
          >
            <img
              src={user.avatar}
              alt=""
              className="rounded-full w-[45px] h-[45px] object-cover"
            />
            <p className="font-bold ">
              {user.profile.firstName} {user.profile.lastName}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default UserList;
