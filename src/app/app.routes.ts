import { CartComponent } from './features/cart/cart.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register.component';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './features/products/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { authGuard } from './core/guards/auth.guard';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { WorkComponent } from './features/work/work.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        canActivate: [authGuard],
        component: HomeComponent,
        pathMatch: 'full',
      },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'work', component: WorkComponent },
      {
        path: 'product/:id',
        canActivate: [authGuard],
        component: ProductDetailsComponent,
      },
      { path: 'cart', component: CartComponent },
      {
        path: 'wishlist',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/wishlist/wishlist.component').then(
            (comp) => comp.WishlistComponent,
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./features/settings/settings.routes').then(
            (route) => route.SettingRoutes,
          ),
      },
    ],
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];
