import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourlistComponent } from './fourlist.component';

describe('FourlistComponent', () => {
  let component: FourlistComponent;
  let fixture: ComponentFixture<FourlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
