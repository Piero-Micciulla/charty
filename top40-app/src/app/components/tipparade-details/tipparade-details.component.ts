import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { Observable } from 'rxjs';
import { IObjectDetails } from '../../shared/models/objectDetails';
import {switchMap} from 'rxjs/operators';
import { DataService } from '../../shared/services/top-40-service/data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tipparade-details',
  templateUrl: './tipparade-details.component.html',
  styleUrls: ['./tipparade-details.component.scss']
})
export class TipparadeDetailsComponent implements OnInit {


  private apiUrl = environment.top40TipparadeApiUrl;
  tipparadeTitleId: string | null = null;
  tipparadeDetails$: Observable<IObjectDetails> | null = null;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
    ) { }

  ngOnInit(): void {
    this.tipparadeTitleId = this.route.snapshot.paramMap.get('title_id');

    this.tipparadeDetails$ = this.route.paramMap.pipe(
      switchMap(params => {
        const title_id = this.tipparadeTitleId
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
