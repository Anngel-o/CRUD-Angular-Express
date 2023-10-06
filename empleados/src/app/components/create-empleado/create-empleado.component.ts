import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.css']
})
export class CreateEmpleadoComponent{
  empleadoForm: FormGroup;
  titulo = "Agregar Empleado";
  id: string | null;
  constructor(private formBuilder: FormBuilder, private router:Router, private toastr: ToastrService, private _empleadoService: EmpleadoService, private aRouter: ActivatedRoute) {
      this.empleadoForm = this.formBuilder.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        numero: ['', Validators.required],
        salario: ['', Validators.required],
      })
    this.id = this.aRouter.snapshot.paramMap.get('id');  
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEmpleado(){
    console.log(this.empleadoForm);

    const EMPLEADO: Empleado = {
      nombre: this.empleadoForm.get('nombre')?.value,
      apellido: this.empleadoForm.get('apellido')?.value,
      numero: this.empleadoForm.get('numero')?.value,
      salario: this.empleadoForm.get('salario')?.value,
    }

    if (this.id != null) {
      //editar producto
      this._empleadoService.editarEmpleado(this.id, EMPLEADO).subscribe(data => {
      this.toastr.info('El empleado fue actualizado!', 'Empleado Actualizado!');
      this.router.navigate(['/']); //redirección a ruta raíz
      }, error => {
        console.log(error);
        this.empleadoForm.reset();
      })
    } else {
      //agregar producto
      console.log(EMPLEADO);
      this._empleadoService.guardarEmpleado(EMPLEADO).subscribe(data => {
        this.toastr.success('El empleado se registró con éxito!', 'Empleado Agregado!');
        this.router.navigate(['/']); //redirección a ruta raíz
      }, error => {
        console.log(error);
        this.empleadoForm.reset();
      })
    }
  }

  esEditar() {
    if (this.id != null) {
      this.titulo = "EDITAR EMPLEADO";
      this._empleadoService.obtenerEmpleado(this.id).subscribe(data => {
        this.empleadoForm.setValue({
          nombre: data.nombre,
          apellido: data.apellido,
          numero: data.numero,
          salario: data.salario,
        });
      });
    }
  }
}
