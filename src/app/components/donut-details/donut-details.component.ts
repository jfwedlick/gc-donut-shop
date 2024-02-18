import { Component } from '@angular/core';
import { GetDonutServiceService } from '../../services/get-donut-service.service';
import { Observable } from 'rxjs';
import { Donut } from '../../models/donut';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-donut-details',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  template:`

@if (donut$ | async; as SpecificDonut) {
  <h1>Donut!</h1> <button>Add to cart</button>
  <h2>Name: {{SpecificDonut.name}} </h2>
  <h2>Calories: {{SpecificDonut.calories}}</h2>
  <h2>Extras:</h2>

  <ul>
  @for (extra of SpecificDonut.extras; track $index) {
      <li>{{extra}}</li>
  }
  </ul>

<h2><img src={{SpecificDonut.photo}}></h2>

<h2>Photo Attribution:</h2>
<p>{{SpecificDonut.photo_attribution}}</p>


  } @else {
    <p>This code is fucking broken!</p>
  }
  `,
  styles:`
img {
    height: 25rem;
    width: 25rem;
  }
  `,
})
export class DonutDetailsComponent {

constructor (private getDonutService: GetDonutServiceService, private route: ActivatedRoute){ }

id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
donut$ = this.getDonutService.getSpecificDonut(this.id);

}
