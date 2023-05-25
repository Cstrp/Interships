import moment from 'moment/moment';
import { User } from '../types';

export const formattedUsers = (users: User[]) =>
  users.map((user) => {
    if (user.registration_date) {
      const formattedRegistrationDate = moment.unix(user.registration_date).format('YYYY/MM/DD || HH:mm:ss');
      const formattedLastVisitDate = moment.unix(user.registration_date).format('YYYY/MM/DD || HH:mm:ss');
      const message = 'This user has not visited...';

      return {
        ...user,
        registration_date: formattedRegistrationDate,
        last_visit: user.last_visit !== null ? formattedLastVisitDate : message,
      };
    }
  });
