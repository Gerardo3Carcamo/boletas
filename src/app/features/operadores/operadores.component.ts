import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-operadores',
  standalone: true,
  imports: [Button, AvatarModule],
  templateUrl: './operadores.component.html',
  styleUrl: './operadores.component.scss'
})
export class OperadoresComponent {

}
