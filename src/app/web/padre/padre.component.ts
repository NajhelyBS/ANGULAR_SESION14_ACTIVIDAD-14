import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  show = false;
  nombre = "";
  dni  = 0;
  estado = "";
  value = {};

  Enviar() {
    this.nombre = (<HTMLInputElement>document.getElementById("name")).value;
    this.dni = (<HTMLInputElement>document.getElementById("dni")).valueAsNumber;
    this.estado = (<HTMLSelectElement>document.getElementById("options")).value;
  
    this.value = {
      "Nombre": this.nombre,
      "DNI": this.dni,
      "Estado Civil": this.estado,
    }

    this.show = !this.show;
  }
}
