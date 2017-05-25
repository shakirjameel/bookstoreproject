import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

  userAuthToken: any;
  adminAuthToken: any;
  user: any;
  admin: any;


  constructor(private http: Http) { }

  registerUser(user){
    console.log('In AuthService method registerUser');
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('users/register', user, {headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user){
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('users/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

  authenticateAdmin(admin){
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('admins/authenticate',admin, {headers: headers})
      .map(res => res.json());
  }


  getProfile(){

    const userData = localStorage.getItem('user');
    const user = JSON.parse(userData);
    const user_id = user.id;
    console.log('In get Profile  '+user);
    console.log('User ID is - '+user_id);
    return this.http.get('users/'+ user_id)
      .map(res => res.json());
  }

  getSemIssueData(){
    const user= localStorage.getItem('user')
    console.log(user);

    const userData = JSON.parse(user);

    return this.http.get('returnsemester/'+userData.id)
      .map(res => res.json());
  }

  getWeeklyIssueData(){
    const user= localStorage.getItem('user')
    console.log(user);

    const userData = JSON.parse(user);

    return this.http.get('return/'+userData.id)
      .map(res => res.json());
  }


  loadUserToken(){
    console.log('In Load User Token');
    const userToken = localStorage.getItem('user_token');
    this.userAuthToken = userToken;
    console.log('The User Token is '+ this.userAuthToken);
  }

  loadAdminToken(){
    const adminToken = localStorage.getItem('admin_token');
    this.adminAuthToken = adminToken;
  }

  userLoggedIn(){
    return tokenNotExpired('user_token');
  }

  adminLoggedIn(){
    return tokenNotExpired('admin_token');
  }

  storeUserData(token, user){
    localStorage.setItem('user_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.userAuthToken = token;
    this.user = user;
    console.log('In storeUserData, authToken ' + this.userAuthToken);
  }

  storeAdminData(token, admin){
    localStorage.setItem('admin_token', token);
    localStorage.setItem('admin', JSON.stringify(admin));
    this.adminAuthToken = token;
    this.admin = admin;
    console.log('In storeAdminData, Admin authToken ' + this.adminAuthToken);
  }

  userLogout(){
    console.log('user logged out');
    this.userAuthToken = null;
    this.user = null;
    localStorage.clear();
  }

  adminLogout(){
    console.log('admin Logged out');
    this.adminAuthToken = null;
    this.admin = null;
    localStorage.clear();
  }

  getWeeklyGenres(){
    return this.http.get('genres/weeklygenre')
      .map(res => res.json());
  }

  addWeeklyGenres(genre){

    const headers = new Headers();
    this.loadAdminToken();
    headers.append('Authorization', this.adminAuthToken);
    headers.append('Content-Type','application/json');
    return this.http.post('genres/weeklygenre',genre, {headers: headers})
      .map(res => res.json());
  }

  updateWeeklyGenreDetails(updatedDetails){

    console.log('In get Profile');
    const headers = new Headers();
    this.loadAdminToken();
    console.log('In get Profile with adminAuthToken '+ this.adminAuthToken);
    headers.append('Authorization', this.adminAuthToken);
    console.log('In AuthService method updateGenreDetails');
    headers.append('Content-Type','application/json');
    return this.http.put('genres/weeklygenre/'+updatedDetails.id ,updatedDetails, {headers: headers})
      .map(res => res.json());
  }

  updateBookGenre(updatedDetails, oldGenre){

    const headers = new Headers();
    this.loadAdminToken();
    console.log('In update Book Genre');
    headers.append('Content-Type','application/json');
    headers.append('Authorization', this.adminAuthToken);

    const updateBookGenre={
      oldGenre: oldGenre,
      newGenre: updatedDetails.type
    };


    return (this.http.put('books/book',updateBookGenre, {headers: headers})
      .map(res => res.json()));
  }


  deleteWeeklyGenre(id){
    const headers = new Headers();
    this.loadAdminToken();
    headers.append('Authorization', this.adminAuthToken);
    return this.http.delete('genres/weeklygenre/'+ id, {headers: headers}).map(res => res.json());
  }

  getSelectedGenreBooks(whichGenreIsSelected){
    const selectedGenre = whichGenreIsSelected;
    return this.http.get('books/'+ selectedGenre)
      .map(res => res.json());
  }

  addWeeklyBook(book){
    console.log('In AuthService method addWeeklyBook');
    const headers = new Headers();
    this.loadAdminToken();
    headers.append('Authorization', this.adminAuthToken);
    headers.append('Content-Type','application/json');
    return this.http.post('books/book',book, {headers: headers})
      .map(res => res.json());
  }


  //put request
  updateWeeklyBook(updatedBook){
    console.log('In AuthService method updateWeeklyBook');
    const headers = new Headers();
    this.loadAdminToken();
    headers.append('Authorization', this.adminAuthToken);
    headers.append('Content-Type','application/json');
    return this.http.put('books/book/'+updatedBook.id ,updatedBook, {headers: headers})
      .map(res => res.json());
  }

  //delete request
  deleteWeeklyBook(bookID){
    console.log('In AuthService method deleteWeeklyBook');
    //const headers = new Headers();
    //headers.append('Content-Type','application/json');,updatedBook, {headers: headers}
    return this.http.delete('books/book/'+bookID)
      .map(res => res.json());
  }

  getSelectedSemBooks(selectedSem){
    const selectedSemester = selectedSem;
    return this.http.get('sembooks/'+ selectedSemester)
      .map(res => res.json());
  }

  addSemesterBook(book){
    console.log('In AuthService method addSemesterBook');
    const headers = new Headers();
    this.loadAdminToken();
    headers.append('Authorization', this.adminAuthToken);
    headers.append('Content-Type','application/json');
    return this.http.post('sembooks/sembook',book, {headers: headers})
      .map(res => res.json());
  }

  updateSemesterBook(updatedBook){
    console.log('In AuthService method updateSemesterBook');
    const headers = new Headers();
    this.loadAdminToken();
    headers.append('Authorization', this.adminAuthToken);
    headers.append('Content-Type','application/json');
    return this.http.put('books/book/'+updatedBook.id ,updatedBook, {headers: headers})
      .map(res => res.json());
  }

  deleteSemesterBook(bookID){
    console.log('In AuthService method deleteWeeklyBook');
    //const headers = new Headers();
    //headers.append('Content-Type','application/json');,updatedBook, {headers: headers}
    return this.http.delete('sembooks/sembook/'+bookID)
      .map(res => res.json());
  }




  addIssueData(bookData){

    const user= localStorage.getItem('user')
    console.log(user);
    const id = bookData.id;

    const userData = JSON.parse(user);
    const returnWeeklyBook = {
      user_id: userData.id,
      username: userData.name,
      prn: userData.prn,
      email: userData.email,
      mobile: userData.mobile,
      sem: userData.sem,
      title: bookData.title,
      genre: bookData.genre,
      author: bookData.author,
      edition: bookData.edition,
      description: bookData.description,
      publisher: bookData.publisher,
      image_url: bookData.image_url
    }
    console.log('In AuthService method addIssueData');
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    //extremely important logic
    return this.http.delete('books/book/'+id).map(res => res.json()).flatMap(issueData => {return this.http.post('return/returnweeklybook',returnWeeklyBook, {headers: headers})
      .map(res => res.json())} );
  }



  addSemesterIssueData(bookData){

    const user= localStorage.getItem('user')
    console.log(user);
    const id = bookData.id;

    const userData = JSON.parse(user);
    const returnWeeklyBook = {
      user_id: userData.id,
      username: userData.name,
      prn: userData.prn,
      email: userData.email,
      mobile: userData.mobile,
      sem: userData.sem,
      title: bookData.title,
      semester: bookData.semester,
      description: bookData.description,
      image_url: bookData.image_url
    }
    console.log('In AuthService method addIssueData');
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    //extremely important logic
    return this.http.delete('sembooks/sembook/'+id).map(res => res.json()).flatMap(issueData => {return this.http.post('returnsemester/returnsemesterbook',returnWeeklyBook, {headers: headers})
      .map(res => res.json())} );
  }



  getReturnWeeklies(){
    return this.http.get('return/returnweeklybook')
      .map(res => res.json());

  }

  deleteWeeklyReturnEntry(returnBookData){

    const Book = {
      title: returnBookData.title,
      genre: returnBookData.genre,
      author: returnBookData.author,
      edition: returnBookData.edition,
      description: returnBookData.description,
      publisher: returnBookData.publisher,
      image_url: returnBookData.image_url
    }
    console.log('In AuthService method deleteWeeklyReturnEntry');
    const headers = new Headers();
    this.loadAdminToken();
    headers.append('Authorization', this.adminAuthToken);
    headers.append('Content-Type','application/json');

    //extremely important logic
    return this.http.delete('return/returnweeklybook/'+ returnBookData._id, {headers: headers}).map(res => res.json()).flatMap(insertNewBookData => {return this.http.post('books/book',Book, {headers: headers})
      .map(res => res.json())});
  }



  getReturnSemesters(){
    return this.http.get('returnsemester/returnsemesterbook')
      .map(res => res.json());

  }


  deleteSemesterReturnEntry(returnBookData){

    const Book = {
      title: returnBookData.title,
      semester: returnBookData.semester,
      description: returnBookData.description,
      image_url: returnBookData.image_url
    }
    console.log('In AuthService method deleteSemesterReturnEntry');
    const headers = new Headers();
    this.loadAdminToken();
    headers.append('Authorization', this.adminAuthToken);
    headers.append('Content-Type','application/json');

    //extremely important logic
    return this.http.delete('returnsemester/returnsemesterbook/'+ returnBookData._id,{headers: headers}).map(res => res.json()).flatMap(insertNewBookData => {return this.http.post('sembooks/sembook',Book, {headers: headers})
      .map(res => res.json())});
  }



  getNotifications(){
    return this.http.get('notifications').map(res=>res.json());
  }

  addNotification(notificationData){
    const admin = localStorage.getItem('admin');

    const adminData = JSON.parse(admin);
    const notification = {
      notification: notificationData,
      created_by: adminData.name
    }


    console.log('In AuthService method addNotification');
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    this.loadAdminToken();
    headers.append('Authorization', this.adminAuthToken);
    //extremely important logic
    return this.http.post('notifications',notification, {headers: headers}).map(res => res.json());

  }

}

