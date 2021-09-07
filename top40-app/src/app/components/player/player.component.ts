import { Component, OnInit } from '@angular/core'
import { AudioService } from '../../shared/services/audio-service/audio.service'
import { DataService } from '../../shared/services/top-40-service/data.service'
import { PlayerService } from '../../shared/services/player.service'
import {FilterService} from '../../shared/services/filter-service/filter.service'
import { StreamState } from '../../shared/models/streamState'
import { IObject } from '../../shared/models/object'
import { environment } from '../../../environments/environment'
import { combineLatest, Observable } from 'rxjs'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {


  allFiles: Array<IObject> = []
  songsFiles: Array<IObject> = []
  albumsFiles: Array<IObject> = []
  tipparadeFiles: Array<IObject> = []
  state: StreamState | null = null
  currentFile: IObject | null = null

  currentFileIndex: number | null = null
  currentFileSource: string | null = null
  currentFileTitle: string | null = null
  currentFileCredit: string | null = null
  currentFileAvatar: string | null = null

  currentWeek: string | null = null
  currentYear: string | null = null

  private apiSongsUrlEndpoint = environment.top40SongsApiUrlEndpoint
  private apiAlbumsUrlEndpoint = environment.top40AlbumsApiUrlEndpoint
  private apiTipparadeUrlEndpoint = environment.top40TipparadeApiUrlEndpoint
  top40Songs$: Observable<IObject[]> | null = null

  public get currentIndex(): number {
    return this.allFiles.findIndex((file) => file.title_id === this.currentFile?.title_id)
  }

  constructor(
    public audioService: AudioService,
    public dataService: DataService,
    public playerService: PlayerService,
    public filterService: FilterService,
  ) {
    this.filterService.currentWeekFilter.subscribe(week => this.currentWeek = week)
    this.filterService.currentYearFilter.subscribe(year => this.currentWeek = year)
    console.log(this.currentWeek)
    console.log(this.currentYear)

    combineLatest([
      this.dataService.loadTop40Objects(this.apiAlbumsUrlEndpoint),
      this.dataService.loadTop40Objects(this.apiSongsUrlEndpoint),
      this.dataService.loadTop40Objects(this.apiTipparadeUrlEndpoint),
      
    ]).subscribe(([albums, songs, tipparade]) => {
      this.allFiles = [...albums, ...songs, ...tipparade]
    })

    // listen to stream state
    this.audioService.getState().subscribe(state => {
      this.state = state
    })

    // get the value of the current file
    this.playerService.currentFile$.subscribe(this.onCurrentFileChange.bind(this));
  }

  private onCurrentFileChange(file: IObject | undefined): void {
    if (! file) {
      this.currentFile = null
      this.currentFileSource = null
      this.currentFileIndex = null
    } else {

      this.currentFile = file
      this.updateTrackProperties(file)
      this.updateAudioStream(file)

      if (! this.isPlaying()) {
        this.play()
      }

    }
  }

  private updateTrackProperties(file: IObject): void {
    this.currentFileTitle = file.title
    this.currentFileCredit = file.credit
    this.currentFileAvatar = file.cover_img_url_small
  }

  private updateAudioStream(file: IObject): void {
    this.audioService.stop()
    if(!file.itunes_track_preview_url){
      console.log(`Error playing file: ${file.title} does not contain a itunes track preview url`);
    } else {
      this.audioService.playStream(file.itunes_track_preview_url).subscribe()
    }
  }

  pause() {
    this.audioService.pause()
  }

  play() {
    this.audioService.play()
  }

  stop() {
    this.audioService.stop()
  }

  
  next() {
    const currentIndex = this.currentIndex
    if (currentIndex > -1) {
      const previousFile = this.allFiles[currentIndex +1]
      this.playerService.updateCurrentFile(previousFile)
      if (! this.isPlaying()) {
        this.play()
      }

    } else {
      console.log("No current file loaded")
    }

  }

  previous() {
    const currentIndex = this.currentIndex
    if (currentIndex > -1) {
      const previousFile = this.allFiles[currentIndex - 1]
      this.playerService.updateCurrentFile(previousFile)
      if (! this.isPlaying()) {
        this.play()
      }

    } else {
      console.log("No current file loaded")
    }


  }

  isFirstPlaying() {
    return this.currentFileIndex === 0
  }

  isLastPlaying() {
    return this.currentFileIndex === this.allFiles.length - 1
  }

  onSliderChangeEnd(change: any) {
    this.audioService.seekTo(change.value)
  }


  ngOnInit(): void {

  }

  private isPlaying(): boolean {
    if (this.state) {
      return this.state.playing
    }
    return false
  }
}
