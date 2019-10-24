import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service Listo');
   }

getQuery( query: string) {
  // La idea seria que la url esté en un archivo de configuración o en sus environments para no meterse al código y modificarlo directamente en el código
  // para la parte del token en authorization sería obtenerlo con un servicio post en el backend sin embargo en la última clase se muestra una solución
  const url = `https://api.spotify.com/v1/${ query }`;
  const headers = new HttpHeaders({
    Authorization: 'Bearer BQCMm51flu9LTjRX0Cf1t6k4bgKtO-DVZj0du57o7phVu6IwXF_FFksSixvM6sQfcqYLNv03Th6s6-cZ-_M'
  });
  return this.http.get(url, {headers});
}

  getNewReleases() {
    // Código optimizado:
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQCMm51flu9LTjRX0Cf1t6k4bgKtO-DVZj0du57o7phVu6IwXF_FFksSixvM6sQfcqYLNv03Th6s6-cZ-_M'
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
    // .pipe( map( data => data['albums'].items ));
    // Lo anterior es esto mismo pero resumido:
    // .pipe( map( data => {
    //   return data['albums'].items;
    // }));
    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( data => data['albums'].items ));

  }
  getArtista( termino: string ) {
    // Código optimizado:
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQCMm51flu9LTjRX0Cf1t6k4bgKtO-DVZj0du57o7phVu6IwXF_FFksSixvM6sQfcqYLNv03Th6s6-cZ-_M'
    // });
    // en la documentación de la api para consumir el servicio es ejemplo el siguiente: https://api.spotify.com/v1/search?q=ed&type=artist&limit=15
    // Los backtics sirven como en c# $'' como interpolación de cadenas altgr + }:
    // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers})
    // .pipe( map( data => data['artists'].items));
    // Lo anterior es esto mismo pero resumido:
    // .pipe( map( data => {
    //   return data['artists'].items;
    // }));
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items));
  }
}
