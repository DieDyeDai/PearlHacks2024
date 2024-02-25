/* This services allows for
  -identifying the current user
  -storing and updating the information of the current user.
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { UserListService } from './user-list.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private user: User = {
    name: 'Your Name',
    bio: "Your Bio goes here! Write a short paragraph about you, your hobbies, and what kinds of careers you are pursuing.",
    interests: ['Mathematics', 'Data Science'],
    gender: GENDER.FEMALE,
    email: 'a@gmail.com',
    password: 'a'
  };

  constructor(private http: HttpClient, private auth: AuthService, private userListService: UserListService) {
    let email: string;
    this.auth.user$.subscribe(
      (profile) => {
        if (profile) {
          console.log(profile.sub);
          // update current user field
          this.pullUser(  (profile.email || '').toString() );
        }
      }
    )
    
    /*
    this.user = {
      name: 'a',
      bio: 'aaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaa aa aaaa aaaaaaaaaaaaaa aaaaaaaaaa',
      interests: ['aaaaaaaaaaaaaaa', 'bbbbbbbbbbbbbb'],
      gender: GENDER.MALE,
      email: 'a@gmail.com',
      password: 'a'
    }
    */
  }

  // get data of current user
  pullUser(email: string) {
    this.http.get<User>(email)
    .subscribe((value) => {
      this.user.name = value.name;
      this.user.bio = value.bio;
      this.user.interests = value.interests;
      this.user.gender = value.gender;
      this.user.email = value.email;
      this.user.password = value.password;
    }
    )
  }

  getUser(): User {return this.user;}

  updateUser(user: User): boolean {
    this.user = user;
    this.http.post("/api/users/", user)
    .subscribe((value)=>{
      this.userListService.getUsers();
    });
    this.http.put("/api/users/", user)
    .subscribe((value)=>{
      this.userListService.getUsers();
    });
    return true;
  }

  updateUserInfo(name: string, bio: string, interests: string[], gender: number): boolean {
    this.user.name = name;
    this.user.bio = bio;
    this.user.interests = interests;
    this.user.gender = gender;
    this.http.put("/api/users/", this.user)
    .subscribe((value)=>{
      this.userListService.getUsers();
    });

    return true;
  }

  deleteUser() {

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