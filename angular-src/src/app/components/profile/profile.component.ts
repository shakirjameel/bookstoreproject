import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from  '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;
  semIssues= [];
  weeklyIssues= [];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile;
      console.log(this.user.name);
    });

   this.authService.getSemIssueData().subscribe(issueData => {
     this.semIssues = issueData;
     console.log(this.semIssues);
   });


    this.authService.getWeeklyIssueData().subscribe(issueData => {
      this.weeklyIssues = issueData;
      console.log(this.weeklyIssues);
    });

  }



}
