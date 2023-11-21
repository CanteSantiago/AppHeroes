import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayaoutPageComponent } from '../auth/pages/layaout-page/layaout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';

// localhost:4200/heroes
const routes: Routes = [
{
  path:'',
  component:LayaoutPageComponent,
  children:[
    { path: 'new-hero', component: NewPageComponent }

  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
