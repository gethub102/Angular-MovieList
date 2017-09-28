import { Component } from "@angular/core";
import { Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'media-item',
  templateUrl: 'partials/media-item.html',
  styleUrls: ['css/media-item.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();
  onDelete() {
    this.delete.emit(this.mediaItem);
  }
}