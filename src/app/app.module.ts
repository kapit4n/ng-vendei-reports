import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

import { RepProductsComponent } from "./pages/rep/rep-products/rep-products.component";
import { RepSellsComponent } from "./pages/rep/rep-sells/rep-sells.component";
import { RepSellsByOrderComponent } from "./pages/rep/rep-sells-by-order/rep-sells-by-order.component";
import { RepSellsByProductComponent } from "./pages/rep/rep-sells-by-product/rep-sells-by-product.component";
import { RepOrdersComponent } from "./pages/rep/rep-orders/rep-orders.component";

import { RepConfigService } from "./services/rep/rep-config.service";
import { RepProductsService } from "./services/rep/rep-products.service";
import { RepSellsService } from "./services/rep/rep-sells.service";
import { RepSellsMonthlyComponent } from "./pages/rep/rep-sells-monthly/rep-sells-monthly.component";
import { RepSellsDailyComponent } from "./pages/rep/rep-sells-daily/rep-sells-daily.component";

const appRoutes: Routes = [
  {
    path: "rep/products",
    component: RepProductsComponent,
    data: { breadcrumb: "Rep Products" }
  },
  {
    path: "rep/sells",
    component: RepSellsComponent,
    data: { breadcrumb: "Rep Sells" }
  },
  {
    path: "rep/sells/monthly",
    component: RepSellsMonthlyComponent,
    data: { breadcrumb: "Rep Sells Monthly" }
  },
  {
    path: "rep/sells/daily",
    component: RepSellsDailyComponent,
    data: { breadcrumb: "Rep Sells Daily" }
  },
  {
    path: "",
    redirectTo: "rep/sells",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RepProductsComponent,
    RepSellsComponent,
    RepOrdersComponent,
    RepSellsByOrderComponent,
    RepSellsByProductComponent,
    RepSellsMonthlyComponent,
    RepSellsDailyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [RepConfigService, RepProductsService, RepSellsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
