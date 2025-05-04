import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { ReturnLogin } from '@models/token.model';
import { TokenService } from '@services/token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceTsService {
 apiUrl = environment.API_URL
  constructor(
    private http : HttpClient, 
    private TokenService: TokenService
  ) { }

  register(name: string, email: string, password: string) {
    return this.http.post<ReturnLogin> (`${this.apiUrl}api/v1/auth/register`,
      { email, password, name });
  }
  login(email: string, contrasena:string) {
    return this.http.post<ReturnLogin>(`${this.apiUrl}api/Usuario/login`, {
      email, 
      contrasena
    }).pipe(
      tap(response => {
        this.TokenService.saveToken(response.token); // efecto secundario
      })
    );
  }
  isAvailable(email:string) {
    return this.http.post(`${this.apiUrl}api/v1/auth/isAvailable`, {
      email
    });
  
  



}
}
