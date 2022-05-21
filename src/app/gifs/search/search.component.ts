import { Component, ElementRef, ViewChild } from "@angular/core";
import { GifsService } from "../services/gifs.service";


@Component({
  selector:"app-search",
  templateUrl:"./search.component.html",
  styleUrls:["./search.component.scss"]
})
export class SearchComponent {
  constructor(private gifsService:GifsService){}

  @ViewChild('text') text!:ElementRef<HTMLInputElement>;

  get history () {
    return this.gifsService.history
  }

  search(text: string){
   if (text.trim()) {
     this.gifsService.add_work(text.toLocaleLowerCase())
     console.log(this.history)
     this.text.nativeElement.value = ""

   }
  }
}
