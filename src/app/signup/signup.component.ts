import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signup',
  imports: [MatCardModule, MatFormFieldModule, FormsModule, MatButtonModule, MatInputModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public name: string = ''
  public email: string = ''
  public password: string = ''

  constructor(private router: Router) {}

  doSignUp() {
    let result = UserService.signUp({
      name: this.name, email: this.email, password: this.password,
      orders: []
    })

    if(result) {
      alert('Uspesno ste se registrovali')
      UserService.login(this.email, this.password)
      this.router.navigate(['/home'])
    } else {
      alert('Greska pri registraciji')
    }
  }

}
