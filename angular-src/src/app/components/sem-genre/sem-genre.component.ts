import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sem-genre',
  templateUrl: './sem-genre.component.html',
  styleUrls: ['./sem-genre.component.css']
})
export class SemGenreComponent implements OnInit {
whichSemesterIsSelected: Number;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  displaySemesterRelatedBooks(buttonEvent){

    this.whichSemesterIsSelected= buttonEvent.target.id;

    console.log('The semester clicked is- '+ this.whichSemesterIsSelected);
    //this.authService.storeGenreSelected(this.whichGenreIsSelected);
    let passSemester = this.whichSemesterIsSelected;
    this.router.navigate(['/sembooks',passSemester]);
  }
}
