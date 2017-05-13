import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';



import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AdminComponent } from './components/admin/admin.component';

import {BooksComponent} from "./components/genre/books/books.component";
import {AddbookComponent} from "./components/genre/books/addbook/addbook.component";

import {GenreComponent} from "./components/genre/genre.component";
import {AddgenreComponent} from './components/genre/addgenre/addgenre.component';
import {GenredetailComponent} from './components/genre/genredetail/genredetail.component';
import {DetailsComponent} from "./components/genre/books/details/details.component";

import {SemGenreComponent} from "./components/sem-genre/sem-genre.component";

import {SemBooksComponent} from "./components/sem-books/sem-books.component";
import {AddsembookComponent} from "./components/sem-books/addsembook/addsembook.component";
import {DetailsembookComponent} from "./components/sem-books/detailsembook/detailsembook.component";

import {ReturnbookComponent} from "./components/returnbook/returnbook.component";

import {ReturnsembookComponent} from "./components/returnsembook/returnsembook.component";

import {NotificationFeedComponent} from "./components/notification-feed/notification-feed.component";


import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';

import {FlashMessagesModule} from 'angular2-flash-messages';

import {AuthGuard} from './guards/auth.guard';



const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path:'admin', component: AdminComponent},
  {path:'weeklygenres', component: GenreComponent, canActivate: [AuthGuard]},
  {path:'semgenres', component: SemGenreComponent, canActivate: [AuthGuard]},
  {path:'books', component: BooksComponent, canActivate: [AuthGuard]},
  {path:'books/:id', component: BooksComponent, canActivate: [AuthGuard]},

  {path:'sembooks', component: SemBooksComponent, canActivate: [AuthGuard]},
  {path:'sembooks/:id', component: SemBooksComponent, canActivate: [AuthGuard]},

  {path:'trackissues', component: ReturnbookComponent, canActivate: [AuthGuard]},


  {path:'tracksemissues', component: ReturnsembookComponent, canActivate: [AuthGuard]},


  {path:'addgenre', component: AddgenreComponent, canActivate: [AuthGuard]},
  {path:'detailgenre', component: GenredetailComponent, canActivate: [AuthGuard]},
  {path:'genredetail', component: GenredetailComponent, canActivate: [AuthGuard]},

  {path:'notifications', component: NotificationFeedComponent, canActivate: [AuthGuard]}


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,

    DashboardComponent,
    ProfileComponent,

    AdminComponent,

    GenreComponent,
    AddgenreComponent,
    GenredetailComponent,

    BooksComponent,
    AddbookComponent,
    DetailsComponent,

    ReturnbookComponent,
    ReturnsembookComponent,

    SemGenreComponent,

    SemBooksComponent,
    AddsembookComponent,
    DetailsembookComponent,


    NotificationFeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
