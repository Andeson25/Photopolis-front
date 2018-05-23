import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {GlobalImportsModule} from "./shared/config/global-imports.module";
import {PagesModule} from "./pages/pages.module";
import {RouterModule, Routes} from "@angular/router";
import {mainRoutes} from "./main.routes";
import {ScrollToModule} from "ng2-scroll-to";

const _routes: Routes = [
  ...mainRoutes
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GlobalImportsModule,
    PagesModule,
    RouterModule.forRoot(_routes, {useHash: true}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
