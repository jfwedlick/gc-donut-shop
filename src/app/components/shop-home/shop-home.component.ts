import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop-home',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule],
  template:
  `
  <h1>Welcome to Frank's Donut Shop</h1>
  <h2>Select a donut below to learn more.</h2>
  <ul>
  <li><a href="www.google.com">Glazed</a></li>
  <li><a href="www.google.com">Chocolate Glazed</a></li>
  <li><a href="www.google.com">Boston Cream</a></li>
  <li><a href="www.google.com">Coconut Caramel Drizzle</a></li>
  <li><a href="www.google.com">Cream Cheese Filled</a></li>
  <li><a href="www.google.com">Cake</a></li>
  <li><a href="www.google.com">Jelly Filled</a></li>
  <li><a href="www.google.com">Cider Mill Cinnamon Sugar</a></li>
  </ul>
`,
  styles: `

}
  `
})
export class ShopHomeComponent implements OnInit, OnDestroy {

  routeSubscription!: Subscription;
  querySubscription!: Subscription;
  id: number = 0;
  params$ = this.activatedRoute.params;
  queryParams$ = this.activatedRoute.queryParams;
  name: string | null = null

  // ActivatedRoute is a service that allows you to OBSERVE the route
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // the subscribe method is used to OBSERVE the route
    // think of it like using the "await" keyword in C#
    // the subscribe method takes in a call back function (C# a lambda)
    // and that function will be called when your observable emits a new value
    // (or if you are thinking in terms of c#, once your awaitable is done)
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
    // if you DO NOT unsubscribe from your observables, you will create
    // a memory leak in your application.
    this.routeSubscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }
}
