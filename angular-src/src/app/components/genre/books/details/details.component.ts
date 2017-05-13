import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from '../../../../services/auth.service';
import {ValidateService} from '../../../../services/validate.service';
import {Router} from  '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() bookDetails;


  id: String;
  title: String;
  author: String;
  edition: String;
  description: String;
  genre: String;
  publisher: String;
  image_url: String;



  notShowEdit = true;

  constructor(private validateService: ValidateService,
              private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {


    this.id = this.bookDetails._id;
    console.log('Object ID of this book is '+this.id);
    this.title = this.bookDetails.title;
    this.author = this.bookDetails.author;
    this.edition = this.bookDetails.edition;
    this.description = this.bookDetails.description;
    this.genre = this.bookDetails.genre;
    this.publisher = this.bookDetails.publisher;
    this.image_url = this.bookDetails.image_url;
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

  showEditBook(){
    this.notShowEdit = false;
  }

  onEditDetailsSubmit(){
    const updateBook = {
      id: this.id,
      title: this.title,
      genre: this.genre,
      author: this.author,
      edition: this.edition,
      description: this.description,
      publisher: this.publisher,
      image_url: this.image_url
    };


    //Reguired Fields
    if (!this.validateService.validateBook(updateBook)) {
      this.flashMessage.show('Please enter all fields', {cssClass: 'alert-danger', timeout: 3000});
      console.log('Enter all the fields');
    }

    this.authService.updateWeeklyBook(updateBook).subscribe(data => {
      if (data.title) {
        this.router.navigate(['/weeklygenres']);
        this.flashMessage.show('The book has been updated suscessfully!', {cssClass: 'alert-success', timeout: 3000});
      } else {
        this.flashMessage.show(data.msg , {cssClass: 'alert-danger', timeout: 3000});
      }

    });
  }

  deleteBook(bookID){

    this.authService.deleteWeeklyBook(bookID).subscribe(data => {
      if (data.ok==1) {

        this.router.navigate(['/weeklygenres']);
        this.flashMessage.show('The book has been deleted suscessfully!', {cssClass: 'alert-success', timeout: 3000});
      } else {
        this.flashMessage.show(data.msg , {cssClass: 'alert-danger', timeout: 3000});
      }

    });

  }



  //Issue Books
  issueBook(){
    const bookData = {
      id: this.id,
      title: this.title,
      genre: this.genre,
      author: this.author,
      edition: this.edition,
      description: this.description,
      publisher: this.publisher,
      image_url: this.image_url
    };

    this.authService.addIssueData(bookData).subscribe(data => {
      if (data) {
        this.router.navigate(['/weeklygenres']);
        this.flashMessage.show('The book has been issued successfully!', {cssClass: 'alert-success', timeout: 3000});
      } else {
        this.flashMessage.show(data.msg , {cssClass: 'alert-danger', timeout: 3000});
      }

    });
  }



}
