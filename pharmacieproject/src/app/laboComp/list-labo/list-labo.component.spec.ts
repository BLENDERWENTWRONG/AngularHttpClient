import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLaboComponent } from './list-labo.component';

describe('ListLaboComponent', () => {
  let component: ListLaboComponent;
  let fixture: ComponentFixture<ListLaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLaboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
