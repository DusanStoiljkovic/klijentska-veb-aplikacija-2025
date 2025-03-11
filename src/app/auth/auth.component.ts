import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, RouterLink],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  public email: string = ''
  public password: string = ''

  constructor(private router: Router) {
    if(UserService.getActiveUser()) {
      router.navigate(['/user'])
      return
    }
  }

  public doLogin() {
    if(UserService.login(this.email, this.password)) {
      this.router.navigate(['/user'])
      return
    }
    alert('Bad email or password')
  }
}
