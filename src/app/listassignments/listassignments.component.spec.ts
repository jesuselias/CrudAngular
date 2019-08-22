import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListassignmentsComponent } from './listassignments.component';

describe('ListassignmentsComponent', () => {
  let component: ListassignmentsComponent;
  let fixture: ComponentFixture<ListassignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListassignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListassignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
