import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PaverComponent } from './paver/paver.component';
import { CopingComponent } from './coping/coping.component';
import { PlasterComponent } from './plaster/plaster.component';


const routes: Routes = [{path: 'contact', component: ContactFormComponent}, {path: 'paver', component: PaverComponent}, {path: 'coping', component: CopingComponent}, {path: 'plaster', component: PlasterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
