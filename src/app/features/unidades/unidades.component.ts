import { Component, inject, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { SpeedDialModule } from 'primeng/speeddial';
import { AgregarUnidadComponent } from '../agregar-unidad/agregar-unidad.component';

@Component({
  selector: 'app-unidades',
  standalone: true,
  imports: [SpeedDialModule],
  providers: [DialogService],
  templateUrl: './unidades.component.html',
  styleUrl: './unidades.component.scss'
})
export class UnidadesComponent {

  private readonly dialog: DialogService = inject(DialogService);

  unidades: any[] = [{}, {}, {}, {}];

  agregarUnidad() {
    this.dialog.open(AgregarUnidadComponent, {
      header: 'Agregar Unidad',
      width: '50%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000
    });
  }

}
