/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GenredetailComponent } from './genredetail.component';

describe('GenredetailComponent', () => {
  let component: GenredetailComponent;
  let fixture: ComponentFixture<GenredetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenredetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenredetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
