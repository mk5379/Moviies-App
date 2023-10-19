import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  sun : boolean = true
  moon : boolean = false

  lightMode() : void {
    if(this.sun == true) {
      document.getElementsByTagName('body')[0].classList.remove('dark')
    }else{
      document.getElementsByTagName('body')[0].classList.add('dark')
    }
    console.log("It work")
  }

  darkMode() : void {
    if(this.sun == true) {
      document.getElementsByTagName('body')[0].classList.add('dark')
    }else{
      document.getElementsByTagName('body')[0].classList.remove('dark')
    }
    console.log("It work")
  }
}
