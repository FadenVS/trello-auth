import { Component, OnInit } from '@angular/core';

import { DataSourceUser } from './data-source';
import { UsersService } from '@services/users.service';
import { ActionButtonsComponent } from 'src/app/shared/action-buttons/action-buttons.component';
import { User } from '@models/user.model';
@Component({
  selector: 'app-users-table', 
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent implements OnInit{

  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'name', 'apellido', 'email'];
  editingRows: { [id: number]: boolean } = {};
  constructor(
    private userService: UsersService
  ) {

  }
ngOnInit() {
  this.userService.getUsers().subscribe(users => { this.dataSource.init(users)})
}
actualizarUsuario(row: User) {
  // Llamar al servicio con nombre, apellido y email de la fila
  this.userService.updateUser(row.nombre, row.apellido, row.email).subscribe({
    next: () => {
      alert('Usuario actualizado con éxito');
      // Aquí puedes hacer algo después de la actualización, como actualizar la lista
    },
    error: (error) => {
      console.error('Error al actualizar el usuario:', error);
      alert('Hubo un error al actualizar');
    }
  });
}
activarEdicion(id: number) {
  this.editingRows[id]= true;
}

//actualizarUsuario(row: User) {
  // En este punto, `row` contiene los datos del usuario a actualizar
}

