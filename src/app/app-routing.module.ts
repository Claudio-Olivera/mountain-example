import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { RecorridosComponent } from './Pages/recorridos/recorridos.component';
import { LoginComponent } from './Auth/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'nosotros', component:NosotrosComponent },
  { path:'recorridos', component:RecorridosComponent },
  { path:'login', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
