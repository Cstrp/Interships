import { UsersActions } from '../types';
import { deleteUser, updateAllStatus, updateStatus } from '../utils';
import { STATUS } from '../enums';

export const useUsersActions = ({ data, setFormattedUsers }: UsersActions) => {
  if (setFormattedUsers) {
    const handleStatusChange = async (status: STATUS) => {
      try {
        if (data) {
          await updateStatus({ id: data.id as number, status });
          setFormattedUsers((prevState) => prevState.map((user) => (user.id === data.id ? { ...user, status } : user)));
        }
      } catch (error) {
        console.error('Error changing user status:', error);
      }
    };

    const handleAllStatusChange = async (newStatus: STATUS) => {
      try {
        await updateAllStatus(newStatus);

        setFormattedUsers((prevState) => prevState.map((user) => ({ ...user, status: newStatus })));
      } catch (error) {
        console.error('Error changing all users status:', error);
      }
    };

    const handleDeleteUser = async () => {
      try {
        if (data) {
          await deleteUser(data.id);

          setFormattedUsers((prevState) => prevState.filter((user) => user.id !== data.id));
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    };

    return { handleDeleteUser, handleStatusChange, handleAllStatusChange };
  }
};
