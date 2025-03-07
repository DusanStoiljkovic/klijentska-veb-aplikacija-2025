import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { OrderModel } from '../models/order.model';
import { MatButtonModule, MatIconAnchor, MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-user',
  imports: [NgFor, NgIf, MatButtonModule, MatCardModule, MatListModule, MatFormField, FormsModule, MatTableModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public orders: OrderModel[] = []
  public newPassword = ''
  public confirmPassword = ''

  constructor(private router: Router) {
    if(!UserService.getActiveUser()) {
      router.navigate(['/home'])
      return
    }
    this.orders = UserService.getActiveUser()!.orders
  }

  public doChangePassword() {
    const newPassword = prompt('Enter your new password')
    if(newPassword == '' || newPassword == null) {
      alert('Password cant be empty')
      return
    }
    alert(UserService.changePassword(newPassword) ? 'Password has been changed' : 'Failed to change password')
  }
}
