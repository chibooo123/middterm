import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayserviceComponent } from './displayservice.component';

describe('DisplayserviceComponent', () => {
  let component: DisplayserviceComponent;
  let fixture: ComponentFixture<DisplayserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
