import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarUnidadComponent } from './agregar-unidad.component';

describe('AgregarUnidadComponent', () => {
  let component: AgregarUnidadComponent;
  let fixture: ComponentFixture<AgregarUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarUnidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
