import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CurrentUserService, GENDER, User } from '../../current-user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  public static Route = {
    path: 'profile/edit',
    title: 'Edit Profile',
    component: UserFormComponent
  };

  name = new FormControl('', [Validators.required]);
  bio = new FormControl('', [Validators.required]);
  interests = new FormControl('', [Validators.required]);

  selectedGender: GENDER = this.currentUserService.getUser().gender;

  genders: GenderSelect[] = [
    {value: 0, viewValue: 'Male'},
    {value: 1, viewValue: 'Female'},
    {value: 2, viewValue: 'Nonbinary'},
    {value: 3, viewValue: 'Other'}
  ];


  public userForm = this.formBuilder.group({
    name: this.name,
    bio: this.bio,
    interests: this.interests,
  });

  constructor(
    private currentUserService: CurrentUserService,
    protected formBuilder: FormBuilder,
    // private router: Router,
    protected snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    let user: User = this.currentUserService.getUser();
    this.userForm.setValue({
      name: user.name,
      bio: user.bio,
      interests: user.interests.join(", ")
    })
  }

  onSubmit() {
    this.currentUserService.updateUserInfo(
      this.userForm.value.name!,
      this.userForm.value.bio!,
      this.userForm.value.interests!.split(","),
      this.selectedGender
    )
    // this.router.navigate(['/profile/']);
    this.snackBar.open('User Edited', '', { duration: 2000 });
    // this.userForm.reset();
  }

}

interface GenderSelect {
  value: GENDER,
  viewValue: string
}