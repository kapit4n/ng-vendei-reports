import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RepConfigService } from "./rep-config.service";
import { Observable } from "rxjs";

export interface ISell {
  id: string;
  productId: number;
  product: any;
  price: number;
  totalPrice: number;
  quantity: number;
}

@Injectable({
  providedIn: "root"
})
export class RepSellsService {
  modelUrl: string;
  includeProd: string;
  includeOrder: string;
  constructor(private http: HttpClient, private configSvc: RepConfigService) {
    this.modelUrl = this.configSvc.baseUrl + "/orderDetails";
    this.includeProd = "filter[include]=product";
    this.includeOrder = "filter[include]=order";
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.modelUrl}?${this.includeProd}&${this.includeOrder}`);
  }
}
