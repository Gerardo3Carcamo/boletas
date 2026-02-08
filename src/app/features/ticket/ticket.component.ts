import { Component } from '@angular/core';
import { NgControl } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [RadioButtonModule],
  providers: [{ provide: NgControl, useValue: null }],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent {

}
