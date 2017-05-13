/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddsembookComponent } from './addsembook.component';

describe('AddsembookComponent', () => {
  let component: AddsembookComponent;
  let fixture: ComponentFixture<AddsembookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsembookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsembookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
