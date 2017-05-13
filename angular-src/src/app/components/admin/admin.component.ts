import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  adminname: String;
  password: String;

  constructor(private authService: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onAdminLoginSubmit(){
    const admin ={
      adminname: this.adminname,
      password: this.password
    }

    this.authService.authenticateAdmin(admin).subscribe(data => {
      console.log(data);
      this.authService.storeAdminData(data.token, data.admin);
      if(data.success){
        this.flashMessage.show('Administrator login successful', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/admin'])
      }
    });
  }
}
