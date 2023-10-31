import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  username : string = '';
  password : string = '';

  registerForm( data : any) : void {
    // alert(this.username)
    console.log(data),
    console.log(data.valid)
  }
}
