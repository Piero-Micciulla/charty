import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {DataService} from './top-40-service/data.service';
import {environment} from '../../../environments/environment';
import {IObject} from '../models/object';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // public fileSubject = new Subject<File[]>();
  // public file$ = this.fileSubject.asObservable();

  // public playSubject = new Subject<File>();
  // public play$ = this.playSubject.asObservable();

  sharingData = { 
    index: 0,
    source: '',
    file: <IObject>{},
  };

  // Observable string source
  private fileSubject = new BehaviorSubject<any | undefined>(undefined);

  // Observable string stream
  currentFile$ = this.fileSubject.asObservable();

  public saveData(index: number, source: string, file: IObject){
    console.log("save data function called " + index + source + file);
    this.sharingData.index = index;
    this.sharingData.source = source;
    this.sharingData.file = file;
    console.log('the object in the player service is' + this.sharingData.file.title)
    this.fileSubject.next(this.sharingData);
  }

  

}
