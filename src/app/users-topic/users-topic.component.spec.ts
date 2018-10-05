import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTopicComponent } from './users-topic.component';

describe('UsersTopicComponent', () => {
  let component: UsersTopicComponent;
  let fixture: ComponentFixture<UsersTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
