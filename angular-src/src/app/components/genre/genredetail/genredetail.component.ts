import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from  '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-genredetail',
  templateUrl: './genredetail.component.html',
  styleUrls: ['./genredetail.component.css']
})
export class GenredetailComponent implements OnInit {

  genres= [];
  type: String;
  id: String;

  showGenreEdit = false;

  constructor(private authService: AuthService, private router: Router, private flashMessage: FlashMessagesService) { }

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

  showEditGenre(genre){

    this.id = genre._id;
    this.type = genre.type;
    //this.create_date = genre.create_date;
    this.showGenreEdit = true;

  }

  onEditGenreDetailsSubmit(id){
    console.log('genre id is '+id);
    const updatedDetails= {
        type: this.type,
        id: id
      }

      this.authService.updateWeeklyGenreDetails(updatedDetails).subscribe(data => {
        if (data.type) {
          this.router.navigate(['/weeklygenres']);
          this.flashMessage.show('The genre has been updated suscessfully!', {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(['/weeklygenres']);

        } else {
          this.flashMessage.show(data.msg , {cssClass: 'alert-danger', timeout: 3000});
        }

      });
  }

  deleteGenre(id){
    this.authService.deleteWeeklyGenre(id).subscribe(data => {
      if (data.ok==1) {
        console.log('Return of Delete '+ data.ok);
        this.router.navigate(['/weeklygenres']);
        this.flashMessage.show('The genre has been deleted suscessfully!', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/weeklygenres']);

      } else {
        this.flashMessage.show(data.msg , {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }
  goBackToGenres(){
    this.router.navigate(['/weeklygenres']);
  }

}
