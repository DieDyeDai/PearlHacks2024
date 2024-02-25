import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private user: User;

  constructor() {
    this.user = {
      name: 'a',
      bio: 'a',
      interests: ['a', 'b'],
      gender: GENDER.MALE,
      email: 'a@gmail.com',
      password: 'a'
    }
  }

  getUser(): User {return this.user;}

  updateUser(user: User): boolean {
    this.user = user;
    return true;
  }

}

export interface User {
  name: string,
  bio: string,
  interests: string[],
  gender: GENDER,
  email: string,
  password: string
}

export enum GENDER {
  MALE,
  FEMALE,
  NONBINARY,
  OTHER
}