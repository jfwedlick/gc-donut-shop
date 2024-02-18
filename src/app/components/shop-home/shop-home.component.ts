import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GetDonutServiceService } from '../../services/get-donut-service.service';

@Component({
  selector: 'app-shop-home',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  template:`
  <h1>Welcome to Frank's Donut Shop</h1>
  <h2>Select a donut below to learn more.</h2>
  <ul>
  @if (donuts$ | async; as donuts) {
    @for (donut of donuts; track $index) {
      <li><a routerLink="/donut-details/{{ donut.id }}">{{ donut.name }}</a></li>
    }
  } @else {
    <p>this code is fucking broken</p>
  }
  </ul>
  `,
  styles: ``
})
export class ShopHomeComponent implements OnInit, OnDestroy {

  routeSubscription!: Subscription;
  querySubscription!: Subscription;
  id: number = 0;
  params$ = this.activatedRoute.params;
  queryParams$ = this.activatedRoute.queryParams;
  name: string | null = null
  donuts$ = this.getDonutService.getDonuts()

  constructor(private activatedRoute: ActivatedRoute, private getDonutService: GetDonutServiceService) { }

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })

    this.querySubscription = this.activatedRoute.queryParams.subscribe(queryParams => {
      if (queryParams['name']) {
        this.name = queryParams['name'];
      }
    })
  }

  ngOnDestroy(): void {

    this.routeSubscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }

}
