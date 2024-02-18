import { Routes } from '@angular/router';
import { ShopHomeComponent } from './components/shop-home/shop-home.component';
import { CartComponent } from './components/cart/cart.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';

export const routes: Routes = [
    { path: 'home', component: ShopHomeComponent },
	{ path: 'cart', component: CartComponent },
	{ path: 'donut-details', component: DonutDetailsComponent },
];

