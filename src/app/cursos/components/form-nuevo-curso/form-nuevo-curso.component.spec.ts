import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevoCursoComponent } from './form-nuevo-curso.component';

describe('FormNuevoCursoComponent', () => {
  let component: FormNuevoCursoComponent;
  let fixture: ComponentFixture<FormNuevoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuevoCursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNuevoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
