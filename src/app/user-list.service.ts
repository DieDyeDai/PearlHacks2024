import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './current-user.service';

@Injectable({
  providedIn: 'root'
})

export class UserListService {

  static dummyUsers: User[] = [
    // dummy users lol
    {
      name: "user1",
      bio: "user1 bio",
      interests: ["", ""],
      email: "stuff",
      password: "things",
      gender: 0,
    },

    {
      name: "user2",
      bio: "user2 bio",
      interests: ["", ""],
      email: "stuff",
      password: "things",
      gender: 0,
    },

    {
      name: "user2",
      bio: "user2 bio",
      interests: ["", ""],
      email: "stuff",
      password: "things",
      gender: 0,
    }

  ];

  private profiles: User[] = UserListService.dummyUsers;
  profilesUpdated = new Subject<void>();

  addUserProfile(profile: User) {
    this.profiles.push(profile);
    this.profilesUpdated.next();
  }

  getUserProfiles() {
    return [...this.profiles];
  }
}