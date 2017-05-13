import { Component, OnInit } from '@angular/core';
import {BooksComponent} from './books/books.component';
import {AddbookComponent} from './books/addbook/addbook.component';
import {AuthService} from '../../services/auth.service';
import {Router} from  '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  showGenres = true;
  whichGenreIsSelected: String;
  genres= [];


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getWeeklyGenres().subscribe((weeklyGenreData) => {
        this.genres = weeklyGenreData;
        console.log('Logging Weekly Genres Data'+this.genres);

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


  displayGenreRelatedBooks(buttonEvent){

    this.whichGenreIsSelected= buttonEvent.target.id;
    this.showGenres = false;
    console.log('The button clicked is- '+ this.whichGenreIsSelected);
    //this.authService.storeGenreSelected(this.whichGenreIsSelected);
    let passGenre = this.whichGenreIsSelected;
    this.router.navigate(['/books',passGenre]);
  }

  addGenre(){
    this.router.navigate(['/addgenre']);

  }

  editAndDeleteGenre () {
    this.router.navigate(['/detailgenre']);
  }


}
