import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./component.app";
import { MediaItemComponent } from "./component.media-item";
import { MediaItemList } from "./component.media-item-list";
import { FavoriteDirective } from "./favorite.directive";
import { CategoryPipeList } from "./pipe.category-list";
import { MediaItemForm } from "./component.media-item-form";
import { MediaItemService } from "./media-item-service";
import { lookupList, lookupListToken } from "./provider";



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent, MediaItemComponent, MediaItemList, 
    FavoriteDirective,
    CategoryPipeList,
    MediaItemForm,
  ],
  providers: [
    MediaItemService,
    { provide: lookupListToken, useValue: lookupList }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}