/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SemBooksComponent } from './sem-books.component';

describe('SemBooksComponent', () => {
  let component: SemBooksComponent;
  let fixture: ComponentFixture<SemBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
