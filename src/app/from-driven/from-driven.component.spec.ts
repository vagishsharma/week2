import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromDrivenComponent } from './from-driven.component';

describe('FromDrivenComponent', () => {
  let component: FromDrivenComponent;
  let fixture: ComponentFixture<FromDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromDrivenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FromDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
