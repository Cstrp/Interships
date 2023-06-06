import { makeAutoObservable } from "mobx";

class UserStore {
  public userName = "";

  constructor() {
    makeAutoObservable(this);
  }

  setUsername(username: string): void {
    this.userName = username;
  }

  getUsername() {
    return this.userName;
  }
}

export const userStore = new UserStore();
