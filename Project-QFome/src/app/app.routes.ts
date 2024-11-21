import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './views/menu/menu.component';
import { ProductComponent } from './views/product/product.component';
import { DetailComponent } from './views/detail/detail.component';
import { OrderComponent } from './views/order/order.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'menu/:id', component: DetailComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'order', component: OrderComponent },
    { path: 'order/:id', component: OrderComponent },
];
