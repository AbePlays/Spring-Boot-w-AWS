import { useState, useEffect } from "react";

import UserProfile from "./components/UserProfile";

const App = () => {
  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/api/v1/user-profile");
      const data = await res.json();
      setUserProfiles(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <UserProfile userProfiles={userProfiles} />
    </div>
  );
};

export default App;
