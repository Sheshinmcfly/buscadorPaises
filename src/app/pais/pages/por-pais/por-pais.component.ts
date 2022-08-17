import { Component } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  mostrarTabla: boolean = false;
  mostrarSugerencias: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];

  constructor(private paisService: PaisService) { }


  buscar(termino: string) {

    this.hayError = false;
    this.mostrarTabla = false;
    this.termino = termino;

    if (this.termino.trim().length === 0) {
      return;
    }

    this.paisService.buscarPais(this.termino)
      .subscribe({
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

  sugerencias(termino: string) {

    this.hayError = false;
    this.mostrarSugerencias = true;
    this.termino = termino;

    this.paisService.buscarPais(termino)
      .subscribe({
        next: (paises) => {

          this.paisesSugeridos = paises.splice(0, 5);
        },
        error: () => {
          this.paisesSugeridos = [];
        }
      })
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
}
