import { Component } from '@angular/core';
import { GetDonutServiceService } from '../../services/get-donut-service.service';
import { Observable } from 'rxjs';
import { Donut } from '../../models/donut';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-donut-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
  @if (donut$ | async; as donut) {
    <p> {{ donut.name }} </p> 
  } @else {
    <p>this code is fucking broken</p>
  }
<h1>Donut!</h1> <button>Add to cart</button>
<h2>Name: </h2>
<h2>Calories: (Placeholder)</h2>
<h2>Extras:</h2>
<ul>
  <li>Placeholder</li>
  <li>Placeholder</li>
  <li>Placeholder</li>
</ul>

<h2>(Image goes here)</h2>

<h2>Photo attribution: (Placeholder)</h2>


  `,
  styles:`

}
  `,
})
export class DonutDetailsComponent {
constructor (private getDonutService: GetDonutServiceService){ }

donut$ = this.getDonutService.getDonuts();

}
