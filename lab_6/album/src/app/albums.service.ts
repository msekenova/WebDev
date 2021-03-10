import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ALBUMS } from './albums/albums';
import { AlbumPhotos, Albums } from './albums/module';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Albums[]> {
    return this.client.get<Albums[]>(`${this.BASE_URL}/albums`);
  }
  getAlbum(id: number): Observable<Albums>{
    return this.client.get<Albums>( `${this.BASE_URL}/albums/${id}` );
  }
  addAlbum(album: Albums): Observable<any> {
    return this.client.post(`${this.BASE_URL}/albums`, album);
  }

  updateAlbum(album: Albums): Observable<Albums> {
    return this.client.put<Albums>(`${this.BASE_URL}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }
  getPhoto(id: number): Observable<AlbumPhotos[]>{
    return this.client.get<AlbumPhotos[]>( `${this.BASE_URL}/albums/${id}/photos` );
  }
}
