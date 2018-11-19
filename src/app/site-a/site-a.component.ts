import { Component, OnInit } from '@angular/core';
import { ChartService } from '../chart.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-site-a',
  templateUrl: './site-a.component.html',
  styleUrls: ['./site-a.component.css']
})
export class SiteAComponent implements OnInit {

  donnees: any;
  constructor(private chartService: ChartService, private app: AppComponent) { }
  
  async ngOnInit() {
    await this.delay(3000);
    if(!this.app.cancel) {
      this.chartService.callSiteA()
        .subscribe(res => {
            console.log(res);
            this.donnees = res;
        });
    }  
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
}
