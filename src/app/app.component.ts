import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ShopHomeComponent } from './components/shop-home/shop-home.component';
import { CartComponent } from './components/cart/cart.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    ShopHomeComponent,
    CartComponent,
    DonutDetailsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'franks-donut-shop';

constructor(private router: Router) { }

routeToDonut(id: number) {
  this.router.navigate(['donut', id], { queryParams: {name: '' } })
}

}



