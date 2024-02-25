/* This services allows for
  -identifying the current user
  -storing and updating the information of the current user.
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private user: User;

  constructor(private http: HttpClient) {
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

  getUserByEmail(email: string): Observable<User> {
    return this.http.get("/api/users/"+email) as Observable<User>;
  }

  updateUser(user: User): boolean {
    this.user = user;
    this.http.put("/api/users/", user);
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