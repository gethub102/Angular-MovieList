import { Component } from "@angular/core";

@Component({
  selector: 'media-item-form',
  templateUrl: 'partials/media-item-form.html',
  styleUrls: ['css/media-item-form.css']
})
export class MediaItemForm {
  onSubmit(mediaItemFormValue) {
    console.log(mediaItemFormValue);
  }
}