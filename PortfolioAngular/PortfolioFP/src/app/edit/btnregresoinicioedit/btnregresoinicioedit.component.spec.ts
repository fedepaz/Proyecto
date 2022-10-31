import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnregresoinicioeditComponent } from './btnregresoinicioedit.component';

describe('BtnregresoinicioeditComponent', () => {
  let component: BtnregresoinicioeditComponent;
  let fixture: ComponentFixture<BtnregresoinicioeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnregresoinicioeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnregresoinicioeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
