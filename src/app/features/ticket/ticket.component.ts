import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgControl } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';  
@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [RadioButtonModule, FormsModule, CommonModule, DropdownModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent {

  today: Date = new Date();
  tipo: any;
  turno: any;

  test(event: any){
    console.log(event);
  }

}
