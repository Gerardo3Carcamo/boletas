import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';  
import { Personal } from '../../shared/Personal';
import { InputTextModule } from 'primeng/inputtext';
import { Button } from "primeng/button";
import { DividerModule } from 'primeng/divider';
import { Solicitante } from '../../shared/Solicitante';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [RadioButtonModule, FormsModule, CommonModule, DropdownModule, InputTextModule, Button, DividerModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent {

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

}
