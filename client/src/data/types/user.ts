import * as moment from 'moment';

export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  registrationDate: moment.Moment;
  lastVisit: moment.Moment;
  status?: string;
}
