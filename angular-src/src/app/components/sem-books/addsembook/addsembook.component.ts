import { Component, OnInit, Input } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {ValidateService} from '../../../services/validate.service';
import {AuthService} from '../../../services/auth.service';


@Component({
  selector: 'app-addsembook',
  templateUrl: './addsembook.component.html',
  styleUrls: ['./addsembook.component.css']
})
export class AddsembookComponent implements OnInit {

  @Input() passSemSelected;

  title: String;
  semester: Number;
  description: String;
  image_url: String;



  constructor(private validateService: ValidateService,
              private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.semester= this.passSemSelected;
  }

  onSemBookSubmit() {
    const book = {
      title: this.title,
      semester: this.semester,
      description: this.description,
      image_url: this.image_url
    };


    //Reguired Fields
    if (!this.validateService.validateSemBook(book)) {
      this.flashMessage.show('Please enter all fields', {cssClass: 'alert-danger', timeout: 3000});
      console.log('Enter all the fields');
    }

    this.authService.addSemesterBook(book).subscribe(data => {
      if (data.title) {
        this.flashMessage.show(data.title + ' has been added suscessfully!', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/semgenres']);
      } else {
        this.flashMessage.show(data.msg , {cssClass: 'alert-danger', timeout: 3000});
      }

    });

  }


}
