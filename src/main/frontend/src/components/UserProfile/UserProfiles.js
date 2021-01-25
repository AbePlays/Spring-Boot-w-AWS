import { useEffect } from "react";

const UserProfiles = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/api/v1/user-profile");
      const data = await res.json();
      console.log(data);
    };

    fetchData();
  }, []);

  return <div>Hello</div>;
};

export default UserProfiles;
