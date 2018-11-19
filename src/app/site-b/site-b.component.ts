import { Component, OnInit } from '@angular/core';
import { ChartService } from '../chart.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-site-b',
  templateUrl: './site-b.component.html',
  styleUrls: ['./site-b.component.css']
})
export class SiteBComponent implements OnInit {

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.callSiteB()
    .subscribe(res => {
        console.log(res);
    });
  }

}
