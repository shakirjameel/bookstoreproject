import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../../services/validate.service';
import {AuthService} from '../../../services/auth.service';

import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addgenre',
  templateUrl: './addgenre.component.html',
  styleUrls: ['./addgenre.component.css']
})
export class AddgenreComponent implements OnInit {

  showGenre= false;
  genrename: String;

  constructor(private validateService: ValidateService,
              private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  onGenreSubmit() {
    const genre = {
      genrename: this.genrename
    };
    console.log(genre.genrename);
    //Reguired Fields
    if (!this.validateService.validateGenre(genre)) {
      this.flashMessage.show('Please enter all fields', {cssClass: 'alert-danger', timeout: 3000});
      console.log('Enter all the fields');
    }

    this.authService.addWeeklyGenres(genre).subscribe(data => {
      console.log('in add genre component subscribing data- success '+data.type );
      if (data.type) {
        this.flashMessage.show( data.type+ ' genre has been added suscessfully!', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/weeklygenres']);
      } else {
        this.flashMessage.show('Oops! The genre has not been added properly. Please try again!' , {cssClass: 'alert-danger', timeout: 3000});
      }

    });

  }

  goBackToGenres(){
    this.router.navigate(['/weeklygenres']);
  }

}
