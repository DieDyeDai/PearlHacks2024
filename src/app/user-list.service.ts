import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from './current-user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserListService {

  static dummyUsers: User[] = [
    // dummy users lol
    {
      name: "user1",
      bio: "user1 bio",
      interests: ["Aaaaa", "Bbbbb"],
      email: "1@gmail.com",
      password: "things",
      gender: 0,
    },

    {
      name: "user2",
      bio: "user2 bio",
      interests: ["Ccccc", "Ddddd"],
      email: "2@gmail.com",
      password: "things",
      gender: 1,
    },

    {
      name: "user3",
      bio: "user3 bio",
      interests: ["Eeeee", "Fffff"],
      email: "3@gmail.com",
      password: "things",
      gender: 2,
    }

  ];

  constructor(private http: HttpClient) {}

  private profiles: User[] = UserListService.dummyUsers;
  profilesUpdated = new Subject<void>();
  
  getUserProfiles() {
    return [...this.profiles];

    this.http.get<User[]>("/api/users")
    .subscribe((value) => {
      
    })
  }
  
  addUserProfile(profile: User): Observable<User> {
    this.profiles.push(profile);
    this.profilesUpdated.next();
    return this.http.put<User>("/api/users", profile) as Observable<User>;
  }


}