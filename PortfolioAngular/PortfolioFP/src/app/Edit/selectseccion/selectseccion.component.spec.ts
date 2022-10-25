import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectseccionComponent } from './selectseccion.component';

describe('SelectseccionComponent', () => {
  let component: SelectseccionComponent;
  let fixture: ComponentFixture<SelectseccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectseccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectseccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
