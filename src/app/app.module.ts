import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './Common/nav/nav.component';
import { FooterComponent } from './Common/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { RecorridosComponent } from './Pages/recorridos/recorridos.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { LoginComponent } from './Auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    RecorridosComponent,
    BlogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
