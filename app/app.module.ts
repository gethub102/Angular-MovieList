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

const LookupList = {
  mediums: ['Movies', 'Series']
};

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
    { provide: 'lookupListToken', useValue: LookupList }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}