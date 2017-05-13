import {AuthService} from '../../services/auth.service';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Subscription } from "rxjs/Rx";
@Component({
  selector: 'app-sem-books',
  templateUrl: './sem-books.component.html',
  styleUrls: ['./sem-books.component.css']
})
export class SemBooksComponent implements OnInit {

  whichSemIsSelected: Number;
  passSemSelected: Number;
  bookDetails: Object;
  semRelatedBooks=[];
  addBookNotClicked = true;
  notShowDetails = true;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
      .params
      .subscribe(params => {
        this.whichSemIsSelected= +params['id'];
        console.log('Getting data from URL, the semester selected is '+this.whichSemIsSelected);
      });

    this.authService.getSelectedSemBooks(this.whichSemIsSelected).subscribe((selectedSemBooksData) => {

        this.semRelatedBooks = selectedSemBooksData;
        this.passSemSelected = this.whichSemIsSelected;
        console.log('Logging Selected Genre - '+ this.passSemSelected);

      },
      err => {
        console.log(err);
        return false;
      });

  }


  showAdminStuff(){
    if(this.authService.userLoggedIn() == true && this.authService.adminLoggedIn() == false){
      //console.log('in show Logout in true condition, user is logged in');
      return false;
    }
    if(this.authService.userLoggedIn() == false && this.authService.adminLoggedIn() == true) {
      //console.log('in show Logout in false condition, admin logged in');
      return true;
    }
  }


  goBackToGenres(){
    this.router.navigate(['/semgenres']);
  }
  addBookFunction(){
    console.log('Add Sem Book is Clicked');
    this.addBookNotClicked = false;

  }
  getDetails(semRelatedBook){
    this.bookDetails = semRelatedBook;
    this.notShowDetails= false;
  }

}
