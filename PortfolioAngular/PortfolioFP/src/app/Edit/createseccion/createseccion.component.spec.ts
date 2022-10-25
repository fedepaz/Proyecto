import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateseccionComponent } from './createseccion.component';

describe('CreateseccionComponent', () => {
  let component: CreateseccionComponent;
  let fixture: ComponentFixture<CreateseccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateseccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateseccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
