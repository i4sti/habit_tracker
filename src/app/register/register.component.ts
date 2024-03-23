import { Component } from '@angular/core';
import { user } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { User } from '../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authService: AuthService, private userSevice : UserService){}

  onSubmit(){
    const email = this.signUpForm.get('email')?.value;
    const password = this.signUpForm.get('password')?.value;

    if (email && password ) {
      this.authService.signup(email, password).then(cred => {
        console.log(cred);
        const user : User = {
          id: cred.user!.uid as string,
          email: email,
          name: email.split('@')[0],
          interestedPerformers: [],
        };
        this.authService.create(user).then(_ =>{
          console.log('User added succesfully.')
        }). catch(error => {
          console.error(error); 
        });
      }).catch(error => {
        console.error(error);
      });
    }else{
      console.log("You need to fill in all the inputs")
    }
  
  }
}
