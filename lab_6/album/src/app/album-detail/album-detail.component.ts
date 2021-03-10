import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ALBUMS } from '../albums/albums';
import { Albums } from '../albums/module';
import {Location} from '@angular/common';
import { AlbumsService } from '../albums.service';
@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album: Albums;
  loaded: boolean;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsService) { 
  }

  ngOnInit(): void {
    this.getAlbum();
  }
  getAlbum(){
    this.route.paramMap.subscribe( (params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    })
  }
  updateAlbum() {
    this.loaded = false;
    this.albumsService.updateAlbum(this.album).subscribe((album) => {
      console.log(album);
      this.loaded = true;
    });
  }
  goBack() {
    this.location.back();
  }

}
