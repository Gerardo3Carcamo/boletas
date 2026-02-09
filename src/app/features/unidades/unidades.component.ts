import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';

@Component({
  selector: 'app-unidades',
  standalone: true,
  imports: [SpeedDialModule],
  templateUrl: './unidades.component.html',
  styleUrl: './unidades.component.scss'
})
export class UnidadesComponent implements OnInit {

  unidades: any[] = [{}, {}, {}, {}];

  ngOnInit() {
  }

}
