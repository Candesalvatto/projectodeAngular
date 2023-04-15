import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioPasswordComponent } from './socio-password.component';

describe('SocioPasswordComponent', () => {
  let component: SocioPasswordComponent;
  let fixture: ComponentFixture<SocioPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocioPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocioPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
