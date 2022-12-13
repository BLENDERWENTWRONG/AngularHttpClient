import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLaboComponent } from './update-labo.component';

describe('UpdateLaboComponent', () => {
  let component: UpdateLaboComponent;
  let fixture: ComponentFixture<UpdateLaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLaboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
