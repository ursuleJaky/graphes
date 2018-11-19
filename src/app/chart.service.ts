import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ChartService {

  constructor(private _http: HttpClient) { }

  callSiteA() {
    return this._http.get("http://localhost:8080/persons/siteA")
    .pipe(map(result=>result));
  }

  callSiteB() {
    return this._http.get("http://localhost:8080/persons/siteB")
    .pipe(map(result=>result));
  }
  
  dailyForecast(){
    return this._http.get('https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1')
    .pipe(map(result=>result));
  }

}
