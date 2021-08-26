import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { IObject } from '../models/object'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // Observable string source
  private fileSubject = new BehaviorSubject<IObject | undefined>(undefined)

  // Observable string stream
  currentFile$ = this.fileSubject.asObservable()

  /**
   * TODO maybe explain what an 'index', a 'source' and a 'file' is.
   * @param index
   * @param source
   * @param file
   */
  public updateCurrentFile(file: IObject) {
    this.fileSubject.next(file)
  }


}
