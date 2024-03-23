import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private authService: AuthService, private router: Router) {}


  logout(): void {
    this.authService.logout()
      .then(() => {
        localStorage.setItem('user', JSON.stringify('null'))
        console.log('Logged out succesfully.');
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.error(error);
      });
  }
}
