import { Component, OnInit } from '@angular/core';
import { ChartService } from '../chart.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-site-a',
  templateUrl: './site-a.component.html',
  styleUrls: ['./site-a.component.css']
})
export class SiteAComponent implements OnInit {

  chart: any;
  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.callSiteA()
    .subscribe(res => {
        console.log(res);
        // this.chart = new Chart('canvas', {
        //   type: 'line',
        //   data: {
        //     labels: res,
        //     datasets: [
        //       {
        //         data: res['entiers'],
        //         borderColor: '#3cba9f',
        //         fill: false
        //       },
        //       {
        //         data: res['doubles'],
        //         borderColor: '#3ffcc00',
        //         fill: false
        //       }
        //     ]
        //   },
        //   options: {
        //     legend: {
        //       display: false
        //     },
        //     scales: {
        //       xAxes: [{
        //         display: true
        //       }],
        //       yAxes: [{
        //         display: true
        //       }]
        //     }
        //   }
        // })
    });  
  }
}
