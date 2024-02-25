import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
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

  /** Internal construction to create an observable `timers$` that stores the last retreived
   *  list of timers from the backend. Every time we call `getTimers()`, we push the resulting
   *  timer list from the .get() API call to the `timers` ReplaySubject. The ReplaySubject stores
   * the last retreived list of timers, and `timers$` exposes this list as an observable.
   *
   * This construction is very useful because it allows us to have an observable we can update that
   * always stores the most up-to-date timer list. So, if we were to delete a timer on the productivity page,
   * for example, we can call getTimers() to update this internal list, refreshing the data on the
   * productivity page automatically without a page refresh.
   *
   * This construction is abstracted out in the CSXL Codebase as `RxObject<T>`, an abstract class located
   * in `src/app/rx-object.ts`.
   */
  private users: ReplaySubject<User[]> = new ReplaySubject(1);
  users$: Observable<User[]> = this.users.asObservable();

  profilesUpdated = new Subject<void>();
  
  // This method should be called when you do something that would update the list of users, i.e. create or edit user.
  getUsers() {
    return [...this.profiles];
    // - Get all TimerResponse objects by calling the GET /api/productivity API
    // - Then, convert the data from TimerResponse objects to TimerData objects. using RxJS operators,
    //    pass the resulting list through the `mapTimerResponseListToDataList` function.
    // - Finally, update the internal timers$ observable by calling `this.timers.next(...)`.
    // - Return the result.
    this.http.get<User[]>("/api/users")
    .subscribe((value) => {
      this.users.next(value);
    })
  }

  getUser(email: string): Observable<User> {
    return this.http.get<User>("/api/users/" + email);
  }
  
  addUser(profile: User): Observable<User> {
    // this.profiles.push(profile);
    // this.profilesUpdated.next();
    return this.http.put<User>("/api/users", profile);
    // when this method is called, the returned observable should be subscribed to to then call get_users to update 
  }




}