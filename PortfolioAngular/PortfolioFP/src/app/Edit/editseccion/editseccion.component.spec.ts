import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditseccionComponent } from './editseccion.component';

describe('EditseccionComponent', () => {
  let component: EditseccionComponent;
  let fixture: ComponentFixture<EditseccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditseccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditseccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
