import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { Observable } from 'rxjs';
import { IObjectDetails } from '../../shared/models/objectDetails';
import {switchMap} from 'rxjs/operators';
import { DataService } from '../../shared/services/top-40-service/data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.scss']
})
export class MusicDetailsComponent implements OnInit {


  private apiUrl = environment.top40SongsApiUrl;
  musicTitleId: string | null = null;
  musicDetails$: Observable<IObjectDetails> | null = null;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
    ) { }

  ngOnInit(): void {
    this.musicTitleId = this.route.snapshot.paramMap.get('title_id');

    this.musicDetails$ = this.route.paramMap.pipe(
      switchMap(params => {
        const title_id = this.musicTitleId
        console.log({ title_id });
        if (title_id === null) {
           throw new Error('No id found in the URL');
        }
        console.log(this.dataService.loadObjectdetails(title_id));
        return this.dataService.loadObjectdetails(title_id);
      })
    );
    
  }

}

