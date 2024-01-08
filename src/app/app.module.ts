import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainComponent } from './main/main.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ServicesComponent } from './services/services.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaverComponent } from './paver/paver.component';
import { CopingComponent } from './coping/coping.component';
import { PlasterComponent } from './plaster/plaster.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    AboutUsComponent,
    MainComponent,
    ContactFormComponent,
    ServicesComponent,
    FooterComponent,
    PaverComponent,
    CopingComponent,
    PlasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
