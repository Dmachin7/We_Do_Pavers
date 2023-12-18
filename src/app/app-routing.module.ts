import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [{path: '', component: MainComponent}, {path: 'contact', component: ContactFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
