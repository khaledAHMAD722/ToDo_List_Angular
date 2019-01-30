import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTodoComponent } from './complete-todo.component';

describe('CompleteTodoComponent', () => {
  let component: CompleteTodoComponent;
  let fixture: ComponentFixture<CompleteTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
