import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClubComponent } from './club/club.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'members',
    component: ClubComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
