# Angular 2 Reviewing

This is the repository for my reivewing Angular2,source is reference by [Angular 2 Essential Training](https://www.lynda.com/AngularJS-tutorials/AngularJS-2-Essential-Training/422834-2.html). 
The full online course is available at [lynda.com](https://lynda.com).  

## Project Description

JavaScript frameworks help you code more quickly, by providing special functionality for developing specific types of web projects. Angular was designed by Google to address challenges programmers face building single-page applications. This course introduces you to the essentials of this "superheroic" framework, including declarative templates, two-way data binding, and dependency injection. Justin Schwartzenberger steps through the framework one feature at a time, focusing on the new component-based architecture of Angular 2. After completing this training, you'll be able to tackle the other project-based courses in our library and create your own Angular app.

Topics include:
- What is Angular?
- Setting up an Angular template
- Creating a component
- Displaying data
- Working with events
- Using two-way data binding
- Creating a subcomponent
- Using the built-in HTTP module
- Using the built-in router module

## Instructions

1. Make sure you have these installed
  - [node.js](http://nodejs.org/)
  - [git](http://git-scm.com/)

2. Clone this repository into your local machine using the terminal (mac) or Gitbash (PC) 

    `git clone https://github.com/gethub102/Angular-MovieList.git`
    
3. CD to the folder

    `cd angular2-essential-training`
    
4. Run the following to install the project dependencies:

    `npm install`
    
5. Run the npm start command to build the code, watch for file changes, and serve up the site locally:

    `npm start`


Note that the site will run using `lite-server` and will be served up at the following local address:  
    http://localhost:3000

*If you use a code editor that launches its own web server please note that it may run on a different port number. 
You will want to use `npm start` for this project.*
  
## More Stuff
### Common Modules
1. NgModule
 - An NgModule is a class decorated with @NgModule metadata
 - Usually usage: 
 ```
// app.component.ts
import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./component.app";
 @NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}
```
```
// main.ts 
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
```

 - then build custom Component

2. BrowserModule
 - Mainly for browser DOM, Pipeline

3. bootstrap file
 ```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.modules';

platformBrowserDynamic().bootstrapModule(AppModule);
 ```
- `platformBrowserDynamic()` return an instance of platform object instance.

4. Custome Component
```
import { Component } from "@angular/core";

@Component({
  selector: 'app',
  templateUrl: './partials/app.html',
  styles: [`
    h1 {color: #ffffff;}
    .description {
      font-style: italic;
      color: green;
    }
  `]
})
export class AppComponent {}
```
5. Interpolation - Property bindings
- `<h1>{{ 10 + 5 }}</h1>`
- Display some data from a property we have set on Component class.
- Nonsupported in `{{}}`
    * Assignments
    * Newing up variables
    * Chaining expressions
    * Incrementing/decrementing
- Property bindings bellow have same result
  ```
  <h1>{{ name }}</h1>
  <h1 [textContent]="name"></h1>
  <h1 textContent="{{name}}"></h1>
  ```

6. Event Bindings
- Code example to binding event. The method is from Component.
  ```
  <a class="delete" (click)="onDelete()">
    remove
  </a>
  ```

7. Getting Data to the component from input
 ```
import { Component } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector: 'media-item',
  templateUrl: 'partials/media-item.html',
  styleUrls: ['css/media-item.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  onDelete() {
    console.log('Delelting .....');
  }
}
 ```

 ```
 <media-item [mediaItem]="firstMediaItem"></media-item>
 <!-- firstMediaItem is a property of AppComponent -->
 ```
8. Subscribing to component events with Output
- import Output from @angular/core
- @Output() varable in Component class, alias coule be used in ('alias'). Note: alias is used to other Components. 

9. Structural directives: ngIf
- ```
  <div *ngIf="mediaItem.watchedOn" >Watched on {{mediaItem.watchedOn}}</div>
  ```
  if watchedOn has a value, it will eveluate to truthy.
- ```
  <template [ngIf]="mediaItem.watchedOn">
    <div>Watched on {{mediaItem.watchedOn}}</div>
  </template>
  ```
  Structural directives works with template elements to modify the DOM. A structural directive place a element named template will handle either rendering or not rendering the inner children of that template element in place of the template element itself. Above is kind of rework the way we used `*ngIf`.

10. Structural directives: ngFor
- ```
  <section>
  <media-item 
    *ngFor="let mediaItem of mediaItems"
    [mediaItem]="mediaItem"
    (delete)="onMediaItemDelete($event)"></media-item>
  </section>
  ```
  for loop media-item-list and pass single media-item as input for meida-item component.

11. Biuld in Attribute directive
- Attribute directive is designed to appearance of behavior the DOM element that they are attached to. 
```
<media-item 
    [ngClass]="{ 'medium-movies': mediaItem.medium==='Movies', 'medium-series': mediaItem.medium==='Series'}"
    *ngFor="let mediaItem of mediaItems"
    [mediaItem]="mediaItem"
    (delete)="onMediaItemDelete($event)"></media-item>
```
12. Custom Attribute directive
```
import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: '[mvFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
}
```
This is used to add `is-favorite` class to element tag, by adding `mvFavorite`. Default value is true.

13. Using Directive values
```
import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: '[mvFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
  @Input() set mvFavorite(value) {
    this.isFavorite = value;
  }
}
```
```
<svg 
    [mvFavorite] = "mediaItem.isFavorite"
    class="favorite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  </svg>
```
use `set` input to pass boolean isFavorite.

14. Working with events in directives
```
import { Directive, HostBinding, HostListener,Input } from "@angular/core";

@Directive({
  selector: '[mvFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-hovering') hovering = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }
  @HostListener('mouseleave') onmouseleave() {
    this.hovering = false;
  }
  @Input() set mvFavorite(value) {
    this.isFavorite = value;
  }
}
```
This will listen the events of mouseenter, and mouseleave.

15. Angular Pipe: build in
- A template expression opterator that takes in a value and returns a new value expression.
  ```
  {{mediaItem.watchedOn | date}}
  {{mediaItem.watchedOn | date: 'shortDate'}}
  {{mediaItem.name | slice: 0: 10}}
  {{mediaItem.name | slice: 0: 10 | uppercase}}
  ```

16. Angular Pipe: custom
```
import { Pipe } from '@angular/core';

@Pipe({
  name: 'categoryList',
  pure: true
}) 
export class CategoryPipeList {
   transform(mediaItems) {
      var categories = [];
      mediaItems.forEach(mediaItem => {
        if (categories.indexOf(mediaItem.category) <= -1) {
          categories.push(mediaItem.category);
        }
      });
      return categories.join(', ');
   }
}
```
```
<header>
  <div>{{ mediaItems | categoryList }}</div>
</header>
```
**Note:** pipe name should not contians **`-`**. Like **category-list** is prevented. It should be written like **categoryList**.

17. Forms
- Collect Data
- Tracking Data
- Validate Data
- Show Errors
- Angular Forms: is used to Bind data, bind events
    * In/out change tracking
    * In/out validaton
        * Buid in validators
        * Custom validators
        * Aysnc validators
        * Form object representation
- Model-Driven Forms
    * Template Driven
    * Model Driven

18. Template Driven Form
```
import { FavoriteDirective } from "./favorite.directive";
import { CategoryPipeList } from "./pipe.category-list";
import { MediaItemForm } from "./component.media-item-form";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent, MediaItemComponent, MediaItemList, 
    FavoriteDirective,
    CategoryPipeList,
    MediaItemForm
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
```
Create a component of form to be used as template.
```
<!-- template html file -->
<form 
#mediaItemForm = "ngForm"
(ngSubmit)="onSubmit(mediaItemForm.value)">
  <ul>
    <li>
      <label for="medium">Medium</label>
      <select name="medium" id="medium" ngModel>
        <option value="Movies">Movies</option>
        <option value="Series">Series</option>
      </select>
    </li>
    <li>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" ngModel>
    </li>
    <li>
      <label for="category">Category</label>
      <select name="category" id="category" ngModel>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
        <option value="Romance">Romance</option>
      </select>
    </li>
    <li>
      <label for="year">Year</label>
      <input type="text" name="year" id="year" maxlength="4" ngModel>
    </li>
  </ul>
  <button type="submit">Save</button>
</form>
```
`<form #mediaItemForm = "ngForm" (ngSubmit)="onSubmit(mediaItemForm.value)">`
` <input type="text" name="name" id="name" ngModel>`is main code for bind form data.
```
<!-- Component ts file -->
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
```
onSubmit() method is to show data object of form 

19. Model-Driven Form
- Form field contract
- Field validation rules
- Change tracking
- Can be unit tested
```
<!-- app.module file, import ReactiveFormModule -->
import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./component.app";
import { MediaItemComponent } from "./component.media-item";
import { MediaItemList } from "./component.media-item-list";
import { FavoriteDirective } from "./favorite.directive";
import { CategoryPipeList } from "./pipe.category-list";
import { MediaItemForm } from "./component.media-item-form";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent, MediaItemComponent, MediaItemList, 
    FavoriteDirective,
    CategoryPipeList,
    MediaItemForm
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
```
```
<!-- component.ts file import FormGroup & FormControl -->
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

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
      name: new FormControl(''),
      category: new FormControl(''),
      year: new FormControl(''),
    });
  }

  onSubmit(mediaItemFormValue) {
    console.log(mediaItemFormValue);
  }
}
```
**Note**: `medium: new FormControl('Movies'),`this default value shoule match option value in select form
```
<!-- template html file -->
<form 
[formGroup]="form"
(ngSubmit)="onSubmit(form.value)">
  <ul>
    <li>
      <label for="medium">Medium</label>
      <select name="medium" id="medium" formControlName="medium">
        <option value="Movies">Movies</option>
        <option value="Series">Series</option>
      </select>
    </li>
    <li>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" formControlName="name">
    </li>
    <li>
      <label for="category">Category</label>
      <select name="category" id="category" formControlName="category">
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
        <option value="Romance">Romance</option>
      </select>
    </li>
    <li>
      <label for="year">Year</label>
      <input type="text" name="year" id="year" maxlength="4" formControlName="year">
    </li>
  </ul>
  <button type="submit">Save</button>
</form>
```
`<form  [formGroup]="form" (ngSubmit)="onSubmit(form.value)">` and `<input type="text" name="year" id="year" maxlength="4" formControlName="year">` is used.

20. Validation: build in
```
ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl(''),
      year: new FormControl(''),
    });
  }
```

```
<!-- html form to disable invalidation form -->
<button type="submit" [disabled]="!form.valid">Save</button>
```

21. Validaion: custom
```
yearValidator(control) {
    if (control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let min = 1900;
    let max = 2100;
    if (year >= min && year <= max) {
      return null;
    } else {
      return {'year': true};
    }
  }
```

```
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
```
**Note**: 
- return null when valid, return an object if invalid.
- FormControl is going to call whatever we hand it as the second argument when it runs invalid check.

22. Error Handling
  ```
  <div *ngIf="form.controls.name.errors" class="error">
    Name is invalid
  </div>
  ```
  ```
  <div *ngIf="form.controls.name.errors?.pattern" class="error">
    Name has invalid characters
  </div>
  // '?' is safe navigator operator which is template expression operator. It tells Agular expression parser, stop here if property before this operator is NULL.
  ```
  ```
  <div *ngIf="form.controls.year.errors?.year" class="error">
    year must be between {{form.controls.year.errors?.year.min}} and {{form.controls.year.errors?.year.max}}.
  </div>

  //-----ts file-----//
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
  ```

23. Class constructor injection
  ```
  constructor(private formBuilder: FormBuilder) {}

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
  ```

24. Injection decorator
- Usage: 
```
// 1. create content for injection
const LookupList = {
  mediums: ['Movies', 'Series']
};

// 2. register this injection in NgModule's Providers
providers: [
  MediaItemService,
  { provide: 'lookupListToken', useValue: LookupList }
],
```

```
// 3. in component file import Inject
import { Component, Inject } from "@angular/core";

// 4. register this injection in Component
constructor(
  private formBuilder: FormBuilder,
  private mediaItemService: MediaItemService,
  @Inject('lookupListToken') public lookupList
) {}
```

```
// 5. in template file, use this injection
<select name="medium" id="medium" formControlName="medium">
  <option *ngFor="let medium of lookupList.mediums" value="{{medium}}">{{medium}}</option>
</select>
```

25. The Opaque Token
```
// 1. create a provider.ts file

import { OpaqueToken } from "@angular/core";

export const lookupListToken = new OpaqueToken('lookupListToken');

export const lookupList = {
  mediums: ['Movies', 'Series']
};
```

```
// 2. import token
import { lookupList, lookupListToken } from "./provider";

// 3. register provider in @NgModule
 providers: [
  MediaItemService,
  { provide: lookupListToken, useValue: lookupList }
],
```

```
// 4. in Component file import token obj
import { lookupListToken } from "./provider";

// 5. register op token in Component's constructor
constructor(
  private formBuilder: FormBuilder,
  private mediaItemService: MediaItemService,
  @Inject(lookupListToken) public lookupList
) {}

// 6. use it in the template file .....
```

26. Http bundle
...
27. Router
...