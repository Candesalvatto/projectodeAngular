import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSociosComponent } from './editar-socios.component';

describe('EditarSociosComponent', () => {
  let component: EditarSociosComponent;
  let fixture: ComponentFixture<EditarSociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSociosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
