
import { AddbookComponent } from '../books/addbook/addbook.component';
import {AuthService} from '../../../services/auth.service';;

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  whichGenreIsSelected: String;
  passGenreSelected: String;
  bookDetails: Object;
  genreRelatedBooks=[];
  addBookNotClicked = true;
  notShowDetails = true;
  showGenreListing = false;

  private subscription: Subscription;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.route
      .params
      .subscribe(params => {
        this.whichGenreIsSelected= params['id'];
        console.log('Getting data from URL, the genre selected is '+this.whichGenreIsSelected);
      });


    this.authService.getSelectedGenreBooks(this.whichGenreIsSelected).subscribe((selectedGenreBooksData) => {

      this.genreRelatedBooks = selectedGenreBooksData;
        this.passGenreSelected = this.whichGenreIsSelected;
        console.log('Logging Selected Genre - '+ this.passGenreSelected);

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
    this.router.navigate(['/weeklygenres']);
  }

  displayGenreRelatedBooks(buttonEvent){
    console.log('The button clicked is- '+ buttonEvent.target.id);
    const whichBookIsSelected= buttonEvent.target.id;
    //this.authService.storeGenreSelected(whichBookIsSelected);

  }

  addBookFunction(){
    console.log('Add Book is Clicked');
    this.addBookNotClicked = false;

  }

  getDetails(genreRelatedBook){
    this.bookDetails = genreRelatedBook;
    this.notShowDetails= false;
  }


}
