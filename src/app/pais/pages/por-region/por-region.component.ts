import { Component } from '@angular/core';

import { Pais } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary me-2' : 'btn btn-outline-primary me-2';
  }

  activarRegion(region: string) {

    // Si la región es igual a la región activa, que no haga nada.
    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(region)
    .subscribe({
      next: (paises) => {

        this.paises = paises;
      }
    })
  }

}
