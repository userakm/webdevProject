import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { aboutusComponent } from './aboutus.component';

describe('aboutusComponent', () => {
  let component: aboutusComponent;
  let fixture: ComponentFixture<aboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ aboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(aboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
