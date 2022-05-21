import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private Http: HttpClient) {
    this._history_search = (localStorage.getItem('gifs')) ? JSON.parse(localStorage.getItem('gifs')!) : []
  }

  private _history_search:string[] = []
  private _key :string ="HHqnft9S3gjCWnDLkCMS5myYrIusEjv3"
  private _url :string = `https://api.giphy.com/v1/gifs/search?`
  private _datas:any [] = [];

  get history () {
    return [...this._history_search]
  }

  get data_result () {
    return this._datas
  }
  add_work (nuevo:string) {
    if (!this._history_search.includes(nuevo)) {
      this._history_search.unshift(nuevo)
      this._history_search = this._history_search.splice(0,10)
      localStorage.setItem('gifs',JSON.stringify(this._history_search))
    }

    const params = new HttpParams()
      .set('api_key',this._key)
      .set('q',nuevo)
    this.Http.get(`${this._url}${params}`)
    .subscribe( (resp:any) => {this._datas = resp.data})



  }



}
