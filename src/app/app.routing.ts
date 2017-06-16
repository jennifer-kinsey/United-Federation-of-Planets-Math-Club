import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClubComponent } from './club/club.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'members',
    component: ClubComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
