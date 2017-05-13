import { Component, OnInit, Input } from '@angular/core';
import {ValidateService} from '../../../../services/validate.service';
import {AuthService} from '../../../../services/auth.service';
import { BooksComponent } from '../books.component'

import {FlashMessagesService} from 'angular2-flash-messages';

import {Router} from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  @Input() passGenreSelected;


  title: String;
  genre: String;
  author: String;
  edition: String;
  description: String;
  publisher: String;
  image_url: String;


  constructor(private validateService: ValidateService,
              private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.genre = this.passGenreSelected;
    console.log('The Passed Genre is '+ this.genre);

  }

  onBookSubmit() {
    const book = {
      title: this.title,
      genre: this.genre,
      author: this.author,
      edition: this.edition,
      description: this.description,
      publisher: this.publisher,
      image_url: this.image_url
    };


    //Reguired Fields
    if (!this.validateService.validateBook(book)) {
      this.flashMessage.show('Please enter all fields', {cssClass: 'alert-danger', timeout: 3000});
      console.log('Enter all the fields');
    }

    this.authService.addWeeklyBook(book).subscribe(data => {
      if (data.title) {
        this.flashMessage.show(data.title + ' has been added suscessfully!', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/weeklygenres']);
      } else {
        this.flashMessage.show(data.msg , {cssClass: 'alert-danger', timeout: 3000});
      }

    });

  }



}
