import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpleadosComponent } from './list-empleados.component';

describe('ListEmpleadosComponent', () => {
  let component: ListEmpleadosComponent;
  let fixture: ComponentFixture<ListEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEmpleadosComponent]
    });
    fixture = TestBed.createComponent(ListEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
