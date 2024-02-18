import { HttpClient } from '@angular/common/http';
import { Donut } from '../models/donut'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDonutServiceService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = 'https://grandcircusco.github.io/demo-apis'

  getDonuts(): Observable<Donut> {
    return this.httpClient.get<Donut>(`${this.baseURL}/donuts.json`);
  }
}
