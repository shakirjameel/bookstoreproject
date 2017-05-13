import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from  '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent implements OnInit {

  weeklyBookDatas = [];


  constructor(private authService: AuthService,  private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
    this.authService.getReturnWeeklies().subscribe((weeklyReturnData) => {


        this.weeklyBookDatas = weeklyReturnData;
        console.log('Logging Weekly return Data'+this.weeklyBookDatas);

      },
      err => {
        console.log(err);
        return false;
      });

  }

  deleteReturnData(returnBookData){

    this.authService.deleteWeeklyReturnEntry(returnBookData).subscribe(data => {
      if (data) {
        this.flashMessage.show('The book has now been added suscessfully!', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/trackissues']);
      } else {
        this.flashMessage.show(data.msg , {cssClass: 'alert-danger', timeout: 3000});
      }

    });
  }

}
