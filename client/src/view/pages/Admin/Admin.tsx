import { useEffect, useState } from "react";
import { api, User } from "../../../data";

export const Admin = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get<User[]>("/users");

        setUsers(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);

  return <></>;
};
