import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service Listo');
   }
  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDH_9KMptxIFVwlYrXIh6mkYlL0Ivlk8dvLM4czUI9gl8IlHiuX2Mul42PhVC1GEGpT5dLzYwH8btLKI_E'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }
  getArtista( termino: string ) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDH_9KMptxIFVwlYrXIh6mkYlL0Ivlk8dvLM4czUI9gl8IlHiuX2Mul42PhVC1GEGpT5dLzYwH8btLKI_E'
    });
    // en la documentación de la api para consumir el servicio es ejemplo el siguiente: https://api.spotify.com/v1/search?q=ed&type=artist&limit=15
    // Los backtics sirven como en c# $'' como interpolación de cadenas altgr + }:
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers});
  }
}
