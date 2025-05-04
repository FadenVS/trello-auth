import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { TokenService } from './token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '@models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
apiUrl= environment.API_URL
  constructor(
    private tokenService: TokenService,
    private http: HttpClient,

  ) {
  
   }

getUsers(){

const token = this.tokenService.getToken()
return this.http.get<User[]>(`${this.apiUrl}api/Usuario`, {
  headers: {
    Authorization: `Bearer ${token}`
  
}
});
}

updateUser(nombre: string, apellido: string, email: string) {
  const token = this.tokenService.getToken()
  return this.http.put(`${this.apiUrl}api/Usuario/editar`, {
    nombre, 
    apellido,
    email
  },  {
    headers: {
      Authorization: `Bearer ${token}`
    }
});
}

}