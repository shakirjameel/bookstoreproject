import { Component, OnInit } from '@angular/core';
import { GenreComponent } from '../genre/genre.component';
import { SemGenreComponent} from '../sem-genre/sem-genre.component';
import {Router} from "@angular/router";
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
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


  onSemClicked(){
    this.router.navigate(['/semgenres']);
  }

  onWeeklyClicked() {
    this.router.navigate(['/weeklygenres']);
  }


  onReturnSemesterClicked(){
    this.router.navigate(['/tracksemissues']);
  }

  onReturnWeeklyClicked(){
    this.router.navigate(['/trackissues'])
  }
}

