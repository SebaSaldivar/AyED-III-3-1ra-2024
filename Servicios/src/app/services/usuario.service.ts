import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private users: string[] = [];

  constructor() { }

  AgregarUsuario(username: string): void {
    this.users.push(username);
  }

  ObtenerUsuario(): string[] {
    return this.users;
  }

  EliminarUsuario(username: string): void {
    const index = this.users.indexOf(username);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
