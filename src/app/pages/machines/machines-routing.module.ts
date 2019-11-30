import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MachinesComponent } from './machines.component';
import { MachineDetailComponent } from './machine-detail/machine-detail.component';


const routes: Routes = [
  {
    path: '',
    component: MachinesComponent,
    children: [
      {
        path: 'machine-detail',
        component: MachineDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class MachinesRoutingModule {
}

