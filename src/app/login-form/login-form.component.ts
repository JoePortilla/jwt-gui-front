import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  login: string = '';
  password: string = '';

  active: string = 'login';
  firstName: string = '';
  lastName: string = '';

  // Method to switch between the forms
  // Bind the click action to this method to update the active value
  onLoginTab(): void {
    this.active = 'login';
  }

  onRegisterTab(): void {
    this.active = 'register';
  }

  // Method to emit the output variable
  onSubmitLogin() {
    this.onSubmitLoginEvent.emit({
      'login': this.login,
      'password': this.password
    })
  }

  onSubmitRegister() {
    this.onSubmitRegisterEvent.emit({
      "firstName": this.firstName,
      "lastName": this.lastName,
      "login": this.login,
      "password": this.password
    });
  }


}
