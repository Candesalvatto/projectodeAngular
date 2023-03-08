import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';

import { sidebarComponent } from './sidebar.component';

describe('sidebarComponent', () => {
  let component: sidebarComponent;
  let fixture: ComponentFixture<sidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatToolbarModule],
      declarations: [ sidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(sidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
