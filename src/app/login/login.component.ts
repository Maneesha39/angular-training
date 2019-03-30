import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // importing from angular/router library
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  success;
  text;

  constructor(
    private router: Router, private authService: AuthService // Router is imported and we are giving it to router variable
  ) { }

  async login() {
    const isValid: Boolean = await this.authService.login(this.username, this.password)
    if (isValid) {
      this.text = "Successful Login"
      this.router.navigate(["dashboard"])
    }
    else {
      this.success = false;
      this.text = "Invalid credentials"
    }
  }
  // login() {
  //   if ((this.username === "admin") && (this.password === "admin@123")) {
  //     this.success = true;
  //     this.text = "Successful Login";
  //     this.router.navigate(["dashboard"]) // on successful login, it redirects to dashboard
  //   }
  //   else {
  //     this.success = false;
  //     this.text = "Inalid Credentials";
  //   }
  // }
}
