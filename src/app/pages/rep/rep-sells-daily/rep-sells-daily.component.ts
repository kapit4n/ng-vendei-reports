import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Chart } from "chart.js";

import {
  RepSellsService,
  ISell
} from "../../../services/rep/rep-sells.service";

@Component({
  selector: "app-rep-sells-daily",
  templateUrl: "./rep-sells-daily.component.html",
  styleUrls: ["./rep-sells-daily.component.css"]
})
export class RepSellsDailyComponent implements OnInit {
  sells: ISell[];
  @ViewChild("dailyChart") private chartRef;
  dailyChart: any;
  constructor(private sellsSrv: RepSellsService, private router: Router) {
    this.sells = [];
  }

  ngOnInit() {
    this.sellsSrv.getAll().subscribe(p => {
      this.sells = p;
      let dailyData: Array<any> = this.dailyData(p);

      this.dailyChart = new Chart(this.chartRef.nativeElement, {
        type: "bar",
        data: {
          labels: Object.keys(dailyData),
          datasets: [
            {
              data: Object.values(dailyData),
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

  dailyData(sells: any) {
    let dailyData: Array<any> = new Array();
    sells.forEach(sell => {
      let createdDate = new Date(sell.createdDate);
      let keyData = createdDate.getMonth() + 1 + "-" + createdDate.getDay();
      if (dailyData[keyData]) {
        dailyData[keyData] = dailyData[keyData] + Number(sell.totalPrice);
      } else {
        dailyData[keyData] = Number(sell.totalPrice);
      }
    });
    return dailyData;
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
