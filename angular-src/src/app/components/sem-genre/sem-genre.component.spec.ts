/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SemGenreComponent } from './sem-genre.component';

describe('SemGenreComponent', () => {
  let component: SemGenreComponent;
  let fixture: ComponentFixture<SemGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
