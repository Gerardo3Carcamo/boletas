import { Injectable } from '@angular/core';
import { User } from '../shared/User';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  saveUser(usuario: User) {
    localStorage.setItem('boletas-user', JSON.stringify(usuario));
  }

  getUser(): User | null {
    const usuario = localStorage.getItem('boletas-user');
    return usuario ? JSON.parse(usuario) : null;
  }

  removeUser() {
    localStorage.removeItem('boletas-user');
  }
}
