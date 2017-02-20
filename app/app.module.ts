import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';
import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home/home.component';
import { SomeComponent }  from './components/some.component';

import { AppService }     from './app.service';
import { HomeService }    from './components/home/home.service';
import { SomeService }    from './services/some.service';

@NgModule({
  imports:      [ routing, BrowserModule ],
  declarations: [ AppComponent, SomeComponent, HomeComponent ],
  providers:    [ appRoutingProviders, AppService, SomeService, HomeService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
