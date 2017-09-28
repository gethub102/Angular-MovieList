import { Component } from "@angular/core";

@Component({
  selector: 'app',
  templateUrl: './partials/app.html',
  styleUrls: ['css/app.css']
})
export class AppComponent {

  onMediaItemDelete(mediaItem) {
    
  }

  firstMediaItem = {
    id: 1,
    name: 'FireBug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2016,
    watchedOn: 1294166565384,
    isFavorate: false
  }
}