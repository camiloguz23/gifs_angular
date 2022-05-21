import { Component } from "@angular/core";
import { GifsService } from "../services/gifs.service";


@Component({
  selector:'app-content',
  templateUrl:'./content.component.html',
  styleUrls:["./content.component.scss"]
})
export class ContentComponent {
  constructor(private Gifsservoce : GifsService) {}

  get resultado () {
    return this.Gifsservoce.data_result
  }
}
