import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { Observable } from 'rxjs';
import { IObjectDetails } from '../../shared/models/objectDetails';
import {IArtist}  from '../../shared/models/artist';
import {IRelatedTrack} from '../../shared/models/related-track';
import {switchMap} from 'rxjs/operators';
import { DataService } from '../../shared/services/top-40-service/data.service';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.scss']
})
export class MusicDetailsComponent implements OnInit {

  musicTitleId: number | null = null;
  musicDetails$: Observable<IObjectDetails> | null = null;
  trackDetails: IObjectDetails | null = null;
  artists: IArtist[] = [];
  artistBio: string = "";
  trackLyrics: string = "";
  relatedTracks: IRelatedTrack[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
    ) { 
      this.musicTitleId = Number(this.route.snapshot.paramMap.get('title_id'));

      this.musicDetails$ = this.route.paramMap.pipe(
        switchMap(params => {
          const title_id = this.musicTitleId
          if (title_id === null) {
            throw new Error('No id found in the URL');
          }

          return this.dataService.loadObjectdetails(title_id);
        })
      );

      this.musicDetails$.subscribe(trackDetails => {
        this.trackDetails = trackDetails;
        this.artists = this.trackDetails!.artists;
        this.artistBio = this.artists[0].biography;
        this.trackLyrics = this.trackDetails.songwiki_lyrics;
        this.relatedTracks = this.trackDetails.related_tracks;
      })

      
    }

    getArtistBio(artist: IArtist){
      this.artistBio = artist.biography
    }

  ngOnInit(): void {   
  }

}

