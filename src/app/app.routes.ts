import { Routes } from '@angular/router';
import { StocksPricesComponent } from './components';
import { IntermediateLevelComponent } from './components/intermediate-level/intermediate-level.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component:  LandingPageComponent},
  { path: 'beginner', component: StocksPricesComponent },
  { path: 'intermediate', component: IntermediateLevelComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
