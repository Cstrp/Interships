export class UserDto {
  id?: string;
  username: string;
  password: string;

  chatParticipants: any[];
  messages: any[];

  createdAt?: Date;
  updatedAt?: Date;
}
