import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayaoutPageComponent } from './pages/layaout-page/layaout-page.component';

const Routes:Routes=[
  {
    path: '',
    component: LayaoutPageComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule],

})
export class AuthRoutingeModule { }
