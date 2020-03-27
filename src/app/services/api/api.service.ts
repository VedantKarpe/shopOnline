import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private createUserUrl = 'http://localhost:8090/api/createUser/';

  constructor(private http: HttpClient) { }

  createUser(data) {
    return this.http.post(this.createUserUrl, data);
  }

}
