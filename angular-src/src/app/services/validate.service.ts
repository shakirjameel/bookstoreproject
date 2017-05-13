import { Injectable } from '@angular/core';
import {isUndefined} from "util";

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if(user.username == undefined || user.email == undefined || user.mobile == undefined || user.prn == undefined || user.password == undefined || user.sem == undefined){
        return false;
    } else {
      return true;
    }
  }

  validateBook(book){

    if(book.title == undefined || book.author == undefined || book.description == undefined || book.edition == undefined || book.publisher == undefined || book.image_url == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateSemBook(book){

    if(book.title == undefined || book.description == undefined  || book.image_url == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateEmail (email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  validateGenre (genre) {
    console.log('In Validate genre '+ genre.genrename);
    if(genre.genrename == undefined){
      return false;
    } else {
      return true;
    }
  }


}
