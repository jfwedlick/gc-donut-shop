import { HttpClient } from '@angular/common/http';
import { Donut } from '../models/donut'
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SpecificDonut } from '../models/specific-donut';

@Injectable({
  providedIn: 'root'
})
export class GetDonutServiceService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = 'https://grandcircusco.github.io/demo-apis'

  getDonuts(): Observable<Donut[]> {
    return this.httpClient.get<{results:Donut[]}>(`${this.baseURL}/donuts.json`).pipe(map((response: { results: Donut[] }) => response.results));
  }

  getSpecificDonut(id: number): Observable<SpecificDonut> {
    return this.httpClient.get<SpecificDonut>(`${this.baseURL}/donuts/${id}.json`);
  }
}
