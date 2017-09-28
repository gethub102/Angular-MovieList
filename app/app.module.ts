import { NgModule } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./component.app";
import { MediaItemComponent } from "./component.media-item";
import { MediaItemList } from "./component.media-item-list";
import { FavoriteDirective } from "./favorite.directive";
import { CategoryPipeList } from "./pipe.category-list"

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent, MediaItemComponent, MediaItemList, 
    FavoriteDirective,
    CategoryPipeList
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}