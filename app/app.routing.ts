import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SomeComponent } from './components/some.component';

const appRoutes: Routes = [
  // Routes without authentication guards
  { path: '', component: SomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'some', component: SomeComponent }

  // Routes with authentication guards
  /*
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'importData', component: DataImporterComponent },
      { path: 'viewDefaulters', component: DefaultersViewComponent },
      { path: 'timeline/:userId', component: TimelineComponent }
    ]
  }
  */
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
