import { Component } from '@angular/core';

import { Pais } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  mostrarTabla: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {

    this.hayError = false;
    this.mostrarTabla = false;
    this.termino = termino;

    if (this.termino.trim().length === 0) {
      return;
    }

    this.paisService.buscarCapital(this.termino).subscribe({
      next: (paises) => {

        this.paises = paises;
        this.mostrarTabla = true;
      },
      error: () => {

        this.hayError = true;
        this.mostrarTabla = false;
        this.paises = [];
      }
    });
  }


  sugerencias(termino: string){

    this.hayError = false;
    // this.mostrarTabla = true;
  }
}
