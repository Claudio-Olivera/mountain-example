import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './Common/nav/nav.component';
import { FooterComponent } from './Common/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { RecorridosComponent } from './Pages/recorridos/recorridos.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { LoginComponent } from './Auth/login/login.component';
import { HeaderComponent } from './Common/header/header.component';
import { RegisterComponent } from './Auth/register/register.component';
import { LoginAdminComponent } from './Auth/login-admin/login-admin.component';

import { BlogServiceService } from './blog-service.service';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    RecorridosComponent,
    BlogComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    LoginAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BlogServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
