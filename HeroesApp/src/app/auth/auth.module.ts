import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayaoutPageComponent } from './pages/layaout-page/layaout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthRoutingeModule } from './auth-routing.module';

@NgModule({
  imports: [
 CommonModule,
 AuthRoutingeModule
  ],
  declarations: [LayaoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ]
})
export class AuthModule { }
