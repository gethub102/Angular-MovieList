import { Component } from "@angular/core";

import { MediaItemService } from "./media-item-service";

@Component({
  selector: 'media-item-list',
  templateUrl: 'partials/media-item-list.html',
  styleUrls: ['css/media-item-list.css']
})
export class MediaItemList {
  mediaItems;

  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit() {
    this.mediaItems = this.mediaItemService.get();
  }

  onMediaItemDelete(mediaItem) {
    console.log(mediaItem);
    this.mediaItemService.delete(mediaItem);
  }
  
}