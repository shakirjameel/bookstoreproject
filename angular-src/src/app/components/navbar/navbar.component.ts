import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  clientLoggedIn(){
    if(localStorage.getItem('user_token')=== null && localStorage.getItem('admin_token')=== null){
     // console.log('in client logged in false condition');
      return false;
    }else {
      //console.log('in client logged in true condition');
      return true;
    }
  }
 showUserStuff(){
    if(this.authService.userLoggedIn() == true && this.authService.adminLoggedIn() == false){
      //console.log('in show Logout in true condition, user is logged in');
      return true;
    }
   if(this.authService.userLoggedIn() == false && this.authService.adminLoggedIn() == true) {
      //console.log('in show Logout in false condition, admin logged in');
      return false;
    }
  }

  onUserLogoutClick(){
    this.authService.userLogout();
    this.flashMessage.show('You are now logged out', {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/login']);
    return false;
  }

  onAdminLogoutClick(){
    this.authService.adminLogout();
    this.flashMessage.show('Administrator now logged out', {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/admin']);
    return false;
  }

}
