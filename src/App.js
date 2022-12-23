import { useEffect, useState } from "react";
import Spinners from "./components/Spinners";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import { userImgs } from "./imgs/userLink";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(
          "https://602e7c2c4410730017c50b9d.mockapi.io/users"
        );

        const data = await res.json();

        if (data.length === 0) {
          setError("No data to show");
        }

        const usersData = data.reduce((pre, crr, i) => {
          crr.avatar = userImgs[i];
          pre.push(crr);
          return pre;
        }, []);

        setUsers(usersData);
        setUserDetails(usersData[0]);
        setIsLoading(false);
      } catch (error) {
        setError("No data to show");
        setIsLoading(false);
      }
    };
    makeRequest();
  }, []);

  if (isLoading) {
    return <Spinners />;
  }

  const userDetailsHandler = (id) =>
    setUserDetails(users.find((user) => id === user.id));

  return (
    <div className="container min-h-screen py-8 text-gray-800">
      {error ? (
        <h1 className="text-center text-2xl font-bold mt-8">{error}</h1>
      ) : (
        <main className="grid grid-cols-[350px_1fr] gap-4 max-w-6xl mx-auto">
          <UserList users={users} userDetailsHandler={userDetailsHandler} />
          <UserDetails userDetails={userDetails} />
        </main>
      )}
    </div>
  );
}

export default App;
