import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  baseURL: string = environment.baseURL 

  constructor(private http: HttpClient) { }

  genericPost(path: string, payload: any):Observable<any> {
    return this.http.post(`${this.baseURL}${path}`, payload)
  }
}
