import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsComponent } from './gifs.component';
import { SearchComponent } from './search/search.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    GifsComponent,
    SearchComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    GifsComponent
  ]
})
export class GifsModule { }
