import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing';
import { AppComponent }  from './app.component';
import { SomeComponent }  from './components/some.component';

@NgModule({
  imports:      [ routing, BrowserModule ],
  declarations: [ AppComponent, SomeComponent ],
  providers:    [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
