import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pruebaapi-countries-simple',
  templateUrl: './pruebaapi-countries-simple.component.html',
  styles: []
})
export class PruebaapiCountriesSimpleComponent implements OnInit {
  paises: any[] = [];
  constructor(private http: HttpClient) { 
    console.log('constructor del home hecho:');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (data: any)  => {
      this.paises = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
