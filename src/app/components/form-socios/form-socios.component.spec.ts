import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSociosComponent } from './form-socios.component';

describe('FormSociosComponent', () => {
  let component: FormSociosComponent;
  let fixture: ComponentFixture<FormSociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSociosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
