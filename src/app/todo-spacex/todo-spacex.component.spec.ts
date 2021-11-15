import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSpacexComponent } from './todo-spacex.component';

describe('TodoSpacexComponent', () => {
  let component: TodoSpacexComponent;
  let fixture: ComponentFixture<TodoSpacexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoSpacexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSpacexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
