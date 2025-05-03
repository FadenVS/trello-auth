import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceTsService {
 apiUrl = environment.API_URL
  constructor(
    private http : HttpClient, 
    
  ) { }

  register(name: string, email: string, password: string) {
    return this.http.post(`${this.apiUrl}api/v1/auth/register`,
      { email, password, name });
  }
  login(email: string, password:string) {
    return this.http.post(`${this.apiUrl}api/v1/auth/login`, {
      email, 
      password
    });
  }
  isAvailable(email:string) {
    return this.http.post(`${this.apiUrl}api/v1/auth/isAvailable`, {
      email
    });
  
  



}
}
