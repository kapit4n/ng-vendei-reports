import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { RepProductsComponent } from './pages/rep/rep-products/rep-products.component';
import { RepSellsComponent } from './pages/rep/rep-sells/rep-sells.component';

import { RepConfigService } from "./services/rep/rep-config.service";
import { RepProductsService } from "./services/rep/rep-products.service";


const appRoutes: Routes = [
  {
    path: "rep/products",
    component: RepProductsComponent,
    data: { breadcrumb: "Inv Products" }
  },
  {
    path: "rep/sells",
    component: RepSellsComponent,
    data: { breadcrumb: "Rep Sells" }
  },
  {
    path: "",
    redirectTo: "rep/products",
    pathMatch: "full"
  }
];


@NgModule({
  declarations: [AppComponent, RepProductsComponent, RepSellsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ RepConfigService, RepProductsService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
