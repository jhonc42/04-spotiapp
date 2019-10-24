import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PruebaapiCountriesSimpleComponent } from './components/pruebaapi-countries-simple/pruebaapi-countries-simple.component';


export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'pruebaapi-countries-simple', component: PruebaapiCountriesSimpleComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
