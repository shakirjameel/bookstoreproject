import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from  '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-returnsembook',
  templateUrl: './returnsembook.component.html',
  styleUrls: ['./returnsembook.component.css']
})
export class ReturnsembookComponent implements OnInit {

  semesterBookDatas = [];


  constructor(private authService: AuthService,  private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
    this.authService.getReturnSemesters().subscribe((semesterReturnData) => {


        this.semesterBookDatas = semesterReturnData;
        console.log('Logging Weekly return Data'+this.semesterBookDatas);

      },
      err => {
        console.log(err);
        return false;
      });

  }


  deleteReturnData(returnBookData){

    this.authService.deleteSemesterReturnEntry(returnBookData).subscribe(data => {
      if (data) {
        this.flashMessage.show('The book has now been added suscessfully!', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/tracksemissues']);
      } else {
        this.flashMessage.show(data.msg , {cssClass: 'alert-danger', timeout: 3000});
      }

    });
  }

}
