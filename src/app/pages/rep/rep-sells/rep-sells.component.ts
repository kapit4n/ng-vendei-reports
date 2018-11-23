import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Chart } from "chart.js";

import {
  RepSellsService,
  ISell
} from "../../../services/rep/rep-sells.service";

@Component({
  selector: "app-rep-sells",
  templateUrl: "./rep-sells.component.html",
  styleUrls: ["./rep-sells.component.css"]
})
export class RepSellsComponent implements OnInit {
  sells: ISell[];
  @ViewChild("monthlyChart") private chartRef;
  monthlyChart: any;
  constructor(private sellsSrv: RepSellsService, private router: Router) {
    this.sells = [];
  }

  ngOnInit() {
    this.sellsSrv.getAll().subscribe(p => {
      this.sells = p;
      let monthlyData: Array = new Array();
      this.sells.forEach(sell => {
        let createdDate = new Date(sell.createdDate);
        let keyData = createdDate.getFullYear() + "-" + (createdDate.getMonth() + 1);
        if (monthlyData[keyData]) {
          monthlyData[keyData] = monthlyData[keyData] + Number(sell.totalPrice);
        } else {
          monthlyData[keyData] = Number(sell.totalPrice);
        }
      });

      this.monthlyChart = new Chart(this.chartRef.nativeElement, {
        type: "bar",
        data: {
          labels: Object.keys(monthlyData),
          datasets: [
            {
              data: Object.values(monthlyData),
              borderColor: "#00AEFF",
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                display: true
              }
            ],
            yAxes: [
              {
                display: true
              }
            ]
          }
        }
      });
    });
  }

  openSellRep(sellId: string) {
    this.router.navigate(["/inv/sells/" + sellId]);
  }

  openProducts() {
    this.router.navigate(["/rep/products"]);
  }

  openCart() {
    this.router.navigate([""]);
  }
}
