import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistaComponent } from './components/artista/artista.component';

// para poder hacer peticiones http:
import { HttpClientModule } from '@angular/common/http';

// Importar Rutas
import { ROUTES } from './app.routes';

// Prueba con la api Countries
import { PruebaapiCountriesSimpleComponent } from './components/pruebaapi-countries-simple/pruebaapi-countries-simple.component';

// Pipe que cree por error
import { NoPipe } from './pipes/no.pipe';

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';

// Views Compartidas
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    ArtistaComponent,
    PruebaapiCountriesSimpleComponent,
    NoPipe,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
