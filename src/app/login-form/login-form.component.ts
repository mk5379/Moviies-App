import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  // username = new FormControl('msi')
  // password = new FormControl('')

  LoginForm = new FormGroup({
    username : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)])
  })

  login() : void {
    console.log(this.LoginForm.valid)
    // alert (this.LoginForm.value)
  }
}
