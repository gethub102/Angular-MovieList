import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'media-item-form',
  templateUrl: 'partials/media-item-form.html',
  styleUrls: ['css/media-item-form.css']
})
export class MediaItemForm {
  form;

  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator),
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
  }
}