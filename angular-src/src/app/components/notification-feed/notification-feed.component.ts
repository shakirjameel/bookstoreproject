import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from  '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {reverse} from "dns";


@Component({
  selector: 'app-notification-feed',
  templateUrl: './notification-feed.component.html',
  styleUrls: ['./notification-feed.component.css']
})
export class NotificationFeedComponent implements OnInit {

  notifications=[];
  notification_data: String;
  reverseList = [];



  constructor(private authService: AuthService,  private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {

    this.authService.getNotifications().subscribe((notifications) => {


        this.notifications = notifications;
        console.log('Logging Notification Data'+this.notifications);

      },
      err => {
        console.log(err);
        return false;
      });

    this.notifications.sort(function(a, b) {
      a = new Date(a.dateModified);
      b = new Date(b.dateModified);
      return a > b ? -1 : a < b ? 1 : 0;
    });
  }

  showAdminStuff(){
    if(this.authService.userLoggedIn() == true && this.authService.adminLoggedIn() == false){
      return false;
    }
    if(this.authService.userLoggedIn() == false && this.authService.adminLoggedIn() == true) {
      return true;
    }
  }

  addNotification(){

    const notification_data = this.notification_data;
    console.log('Notification Data is '+notification_data);
    this.authService.addNotification(notification_data).subscribe(data => {
      if (data.notification) {
        this.flashMessage.show('The notification has now been added suscessfully!', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/notifications']);
      } else {
        this.flashMessage.show(data.msg , {cssClass: 'alert-danger', timeout: 3000});
      }

    });
  }

}
