import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';  
import { Personal } from '../../shared/Personal';
import { InputTextModule } from 'primeng/inputtext';
import { Button } from "primeng/button";
import { DividerModule } from 'primeng/divider';
import { Solicitante } from '../../shared/Solicitante';
import { CalendarModule } from 'primeng/calendar';
import { ApiService } from '../../infrastructure/api/api.service';
import { User } from '../../shared/User';
import { Response } from '../../infrastructure/Models/Response';
import { env } from '../../../environments/environment';
import { Usuario } from '../../shared/Usuario';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [
    RadioButtonModule, 
    FormsModule, 
    CommonModule, 
    DropdownModule, 
    InputTextModule, 
    Button, 
    DividerModule, 
    CalendarModule,
    HttpClientModule
  ],
  providers: [ApiService],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent implements OnInit {

  ngOnInit(): void {
    this.getUsers();
  }

  private readonly api: ApiService = inject(ApiService);

  users: Usuario[] = [];

  today: Date = new Date();
  tipo: any;
  turno: any;

  personal: Personal[] = [
    {
      nombre: 'Juan Perez',
      direccion: 'Calle Falsa 123',
      nomina: '12345'
    }
  ];
  solicitantes: Solicitante[] = [
    {
      nombre: 'Maria Lopez',
      departamento: 'Recursos Humanos'
    }
  ]

  addPersonal() {
    this.personal.push({
      nombre: '',
      direccion: '',
      nomina: ''
    });
  }
  removePersonal(nomina: string) {
    const index = this.personal.findIndex(p => p.nomina === nomina);
    if (index !== -1) {
      this.personal.splice(index, 1);
    }
  }

  addSolicitante() {
    this.solicitantes.push({
      nombre: '',
      departamento: ''
    });
  }
  removeSolicitante(nombre: string) {
    const index = this.solicitantes.findIndex(s => s.nombre === nombre);
    if (index !== -1) {
      this.solicitantes.splice(index, 1);
    }
  }

  getUsers() {
    this.api.get<Response<Usuario[]>>(`${env.backend}Usuario/GetUsuarios`).subscribe({
      next: response => {
        this.users = response.data;
      }
    })
  }
}
