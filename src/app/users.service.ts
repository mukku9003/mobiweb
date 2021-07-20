import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }



  getDatas() {
    let url = 'http://localhost:5000/api/EAlbum/GetAlbumDetail?albumId=100';
    return this.http.get(url);

  }
}
