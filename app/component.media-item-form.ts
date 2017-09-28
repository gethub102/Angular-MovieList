import { Component, Inject } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";

import { MediaItemService } from "./media-item-service";

@Component({
  selector: 'media-item-form',
  templateUrl: 'partials/media-item-form.html',
  styleUrls: ['css/media-item-form.css']
})
export class MediaItemForm {
  form;

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject('lookupListToken') public lookupList
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator),
    });
  }

  yearValidator(control) {
    if (control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 1800;
    let maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {'year': {
        min: minYear,
        max: maxYear
      }};
    }
  }

  onSubmit(mediaItemFormValue) {
    console.log(mediaItemFormValue);
    this.mediaItemService.add(mediaItemFormValue);
  }
}