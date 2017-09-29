import { Routes, RouterModule  } from "@angular/router";

import { MediaItemForm } from "./component.media-item-form";
import { MediaItemList } from "./component.media-item-list";

const appRoutes: Routes = [
  { path: 'add', component: MediaItemForm },
  { path: ':medium', component: MediaItemList },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes, { enableTracing: true });