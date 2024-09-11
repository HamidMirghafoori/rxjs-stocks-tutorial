import { Routes } from '@angular/router';
import { StocksPricesComponent } from './components';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component:  LandingPageComponent},
  { path: 'stock-prices', component: StocksPricesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
