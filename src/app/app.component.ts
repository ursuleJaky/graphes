import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercice';

  sites = [
       {id: 1, name: "site-a"},
       {id: 2, name: "site-b"}
     ];
    selectedValue = 'faites une selection';

  constructor(private router: Router) {}
  
  navigateTo(value) {
    if (value) {
        this.router.navigate([value]);
    }
    return false;
}
}
