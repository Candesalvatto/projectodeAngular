import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormSociosComponent } from './form-socios.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ServicesSociosService } from 'src/app/services/services-socios.service';

describe('FormSociosComponent', () => {
  let component: FormSociosComponent;
  let fixture: ComponentFixture<FormSociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSociosComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ServicesSociosService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea correctamente', () => {
    expect(component).toBeFalsy();
  });
});
