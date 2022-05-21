import { Component, OnInit } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private gifsService : GifsService) { }

  ngOnInit(): void {
  }


  get history () {
    return this.gifsService.history
  }

  getText ( eleement: string ) {
    this.gifsService.add_work(eleement)
  }
}
