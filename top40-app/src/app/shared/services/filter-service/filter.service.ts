import { Injectable } from '@angular/core';
import {DataService} from '../top-40-service/data.service'
import {Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  
  private filterWeekParam = new BehaviorSubject<string>('')
  private filterYearParam = new BehaviorSubject<string>('')
  currentWeekFilter = this.filterWeekParam.asObservable();
  currentYearFilter = this.filterYearParam.asObservable();

  changeFilters(week: string, year: string){
    console.log(week, year)
    this.filterWeekParam.next(week);
    this.filterYearParam.next(year);
  }

}
