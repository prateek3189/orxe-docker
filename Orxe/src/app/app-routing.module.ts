import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './component/input/input.component';
import { ButtonComponent } from './component/button/button.component';

const routes: Routes = [
  {path:'input', component: InputComponent},
  {path:'button', component: ButtonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
