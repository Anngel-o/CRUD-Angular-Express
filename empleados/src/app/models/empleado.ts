export class Empleado {
    _id?: number;
    nombre: string;
    apellido: string;
    numero: string;
    salario: string;

    constructor(nombre:string,apellido:string,numero:string,salario:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.numero = numero;
        this.salario = salario;
    }
}