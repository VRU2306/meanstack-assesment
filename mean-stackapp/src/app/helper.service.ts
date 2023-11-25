import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private apiUrl = 'http://localhost:1200/';
  constructor(
    private http: HttpClient
  ) { }

  postDataRegister(user: any) {
    return this.http.post(`${this.apiUrl}auth/register`, user);
  }
  getData() {
    return this.http.get(`${this.apiUrl}auth/users`)
  }
}
