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