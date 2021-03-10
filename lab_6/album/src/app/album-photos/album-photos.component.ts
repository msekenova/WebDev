import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { AlbumPhotos, Albums } from '../albums/module';
import {Location} from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  album: Albums;
  loaded:boolean;
  photos: AlbumPhotos[];
  constructor(private route: ActivatedRoute,
    private location: Location,
    private albumsService: AlbumsService) { 
}
  ngOnInit(): void {
    this.getPhoto();
    this.getAlbum();
  }
  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
      });
    });
  }
  getPhoto(){
    this.route.paramMap.subscribe( (params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumsService.getPhoto(id).subscribe((photo) => {
        this.photos = photo;
        this.loaded = true;
      });
    })
  }

  goBack() {
    this.location.back();
  }

}
