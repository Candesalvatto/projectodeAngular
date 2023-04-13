import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSociosComponent } from './data-socios.component';

describe('DataSociosComponent', () => {
  let component: DataSociosComponent;
  let fixture: ComponentFixture<DataSociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSociosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
