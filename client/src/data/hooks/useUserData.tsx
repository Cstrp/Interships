// import { useEffect, useState } from 'react';
// import { getUsers } from '../utils';
// import { User } from '../types';
// import { useLoading } from './useLoading';

// export const useUserData = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const { startedLoading, stoppedLoading } = useLoading();
//
//   const fetchUsers = async () => {
//     try {
//       const res = await getUsers();
//       if (res) {
//         setUsers(res.users);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };
//
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         startedLoading();
//
//         const res = await getUsers();
//         if (res) {
//           setUsers(res.users);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchUsers();
//     stoppedLoading();
//   }, []);
//
//   return { users, setUsers };
// };
