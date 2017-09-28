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