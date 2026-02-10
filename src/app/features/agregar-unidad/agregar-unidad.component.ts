import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { Unidad } from '../../shared/payloads/Unidad';
import { ApiService } from '../../infrastructure/api/api.service';
import { Response } from '../../infrastructure/Models/Response';
import { env } from '../../../environments/environment';
import { Marca } from '../../shared/Marca';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-agregar-unidad',
  standalone: true,
  imports: [
    ButtonModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  templateUrl: './agregar-unidad.component.html',
  styleUrl: './agregar-unidad.component.scss'
})
export class AgregarUnidadComponent implements OnInit {

  ngOnInit(): void {
    this.GetMarcas();
  }

  private readonly api: ApiService = inject(ApiService);
  private readonly safeUrl: DomSanitizer = inject(DomSanitizer);

  marcas: Marca[] = [];

  marcaSeleccionada: number | null = null;

  unidad: Unidad = {
    marca: 0,
    modelo: '',
    anio: 0,
    numeroUnidad: ''
  }

  GetMarcas() {
    this.api.get<Response<Marca[]>>(`${env.backend}Marca/GetMarcas`).subscribe({
      next: response => {
        this.marcas = response.data;
      }
    });
  }
  FindName(): string {
    return this.marcas.find(m => m.id === this.marcaSeleccionada)?.nombre || '';
  }
  ValidarCampos(): boolean {
    return this.marcaSeleccionada !== null && this.unidad.modelo.trim() !== '' && this.unidad.anio > 0 && this.unidad.numeroUnidad.trim() !== '';
  }
  SaveUnidad() {
    const payload: Unidad = {
      marca: this.marcaSeleccionada || 0,
      modelo: this.unidad.modelo,
      anio: this.unidad.anio,
      numeroUnidad: this.unidad.numeroUnidad
    };
    this.api.post<Response<Unidad>>(`${env.backend}Unidad/CrearUnidad`, payload).subscribe({
      next: response => {
        console.log(response);
      }
    });
  }

}
