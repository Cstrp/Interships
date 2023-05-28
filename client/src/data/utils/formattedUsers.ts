import { User } from '../types';
import moment from 'moment';

export const formattedUsers = (users: User[]) =>
  users.map((user) => ({
    ...user,
    registration_date: moment.unix(user.registration_date).format('DD | MMMM | YYYY ---> HH:mm:ss'),
    last_visit: user.last_visit
      ? moment.unix(user.last_visit!).format('DD | MMMM | YYYY || HH/mm/ss')
      : 'This user has not visited...',
  }));
