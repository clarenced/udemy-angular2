import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Artist} from '../../Artist';
import {Album} from '../../Album';

import {SpotifyService} from '../../services/spotify.services';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: `artist.component.html`,
})
export class ArtistComponent implements OnInit {
    id: string;
    artist: Artist;
    albums: Album[];

    constructor(private _spotifyService: SpotifyService, private _activatedRoutes: ActivatedRoute){

    }

    ngOnInit(){
        this._activatedRoutes.params.map(params => params['id']).subscribe((id) => {
            this._spotifyService.getArtist(id).subscribe(artist => {
                this.artist = artist;
            });
            this._spotifyService.getAlbums(id).subscribe(albums => {
                this.albums = [ ...albums.items ];
            });
        });
    }
}