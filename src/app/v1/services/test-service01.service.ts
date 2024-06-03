import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { test01 } from '../interface/test01.Interface';

@Injectable({
  providedIn: 'root'
})
export class TestService01Service {
  
  private apiUrl = environment.apiUrl;


  constructor(private http:HttpClient) {}


  getTestData():Observable<test01[]>{
    return this.http.get<test01[]>(`${this.apiUrl}`);
  }
}
