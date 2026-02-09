import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ApiService } from '../../infrastructure/api/api.service';
import { env } from '../../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from '../../core/storage.service';
import { NavigationService } from '../../core/navigation.service';
import { Response } from '../../infrastructure/Models/Response';
import { User } from '../../shared/User';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly api: ApiService = inject(ApiService);
  private readonly storage: StorageService = inject(StorageService);
  private readonly navigation: NavigationService = inject(NavigationService);

  username: string = '';
  password: string = '';

  login(){  
    this.api.get<Response<User>>(`${env.backend}Usuario/Login?usuario=${this.username}&pass=${this.password}`).subscribe({
      next: response => {
        this.storage.saveUser(response.data);
        this.navigation.navigateTo('/ticket');
      },
      error: error => {

      }
    })
  }

}
