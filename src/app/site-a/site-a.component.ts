import { Component, OnInit } from '@angular/core';
import { ChartService } from '../chart.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-site-a',
  templateUrl: './site-a.component.html',
  styleUrls: ['./site-a.component.css']
})
export class SiteAComponent implements OnInit {

  chart: any;
  donnees: any;
  constructor(private chartService: ChartService, private _http: HttpClient) { }
  
  async ngOnInit() {
    //await this.syncEvaluations();
    console.log('debut A ');
    await this.delay(3000);
    this.chartService.callSiteA()
    .subscribe(res => {
        console.log(res);
        this.donnees = res;
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

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  timeConverter(timestamp) {
    var a = new Date(timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
  /*syncEvaluations(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.get("http://localhost:8000/siteA.json")
        .done((res) => {
            
            resolve();
        });
        
    });
}*/
}
