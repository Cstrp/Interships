import { UserProfile } from 'src/types/user-profile';
import { Ref } from 'vue';

export interface User {
  id?: string;
  email: Ref<string | null>;
  password: Ref<string | null>;
  profile: UserProfile;

  createdAt?: Date;
  updatedAt?: Date;
}
