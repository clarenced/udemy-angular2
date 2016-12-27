import { Component } from '@angular/core';

import {SpotifyService} from '../../services/spotify.services';
import {Artist} from '../../Artist';

@Component({
    moduleId: module.id,
  selector: 'search',
  templateUrl: `search.component.html`,
})
export class SearchComponent {
  searchStr: string;
  searchRes: Artist[];

  constructor(private _spotifyService: SpotifyService) {  }


  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr).subscribe(artiss => {
      this.searchRes = artiss.artists.items;
    });
  }
 };
