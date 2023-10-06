import { Component} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
// import { Firestore, collection, collectionData } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent {
  // firestore: Firestore = inject(Firestore);
  // items$: Observable<any[]>;

  // constructor() {
  //   const aCollection = collection(this.firestore, 'items')
  //   this.items$ = collectionData(aCollection);
  // }
  listEmpleados: Empleado[] = [];

  constructor(private _empleadoService: EmpleadoService, private toastr: ToastrService) {}
  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados() {
    this._empleadoService.getEmpleados().subscribe(data =>{
      console.log(data);
      this.listEmpleados = data;
    }, error => {
      console.log(error);
    })
  }
  eliminarEmpleado(id: any) {
    this._empleadoService.eliminarEmpleado(id).subscribe(data =>{
      this.toastr.error('Empleado eliminado con éxito', 'producto eliminado');
      this.obtenerEmpleados();
    }, error => {
      console.log(error);
    })
  }
}
