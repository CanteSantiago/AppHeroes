import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/Error404-page/Error404-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Error404PageComponent
  ],
  exports:[
    Error404PageComponent
  ]
})
export class SharedModule { }
