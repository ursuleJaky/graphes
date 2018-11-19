import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartService } from './chart.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SiteAComponent } from './site-a/site-a.component';
import { SiteBComponent } from './site-b/site-b.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'site-a', component: SiteAComponent},
  {path: 'site-b', component: SiteBComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SiteAComponent,
    SiteBComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
