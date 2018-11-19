import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ChartService } from '../chart.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @ViewChild('canvas') canvas: ElementRef;
@ViewChild('canvas', {read: ElementRef}) canvas: ElementRef;




  chart: any;

  constructor(private chartService: ChartService) { }

 
  ngOnInit() {
    
  }

}
