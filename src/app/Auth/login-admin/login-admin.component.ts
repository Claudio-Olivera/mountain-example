import { Component } from '@angular/core';
import { BlogServiceService } from 'src/app/blog-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface LoginResponse {
  token?: string;
  error?: string;
}

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  username!: string;
  password!: string;
  blogs:any;
  constructor(private http: HttpClient, private apiBlogs:BlogServiceService, private router: Router) {}
  

  ngOnInit(): void {
    this.apiBlogs.getBlogs().subscribe((data)=>{
      this.blogs = data;
    })
  }

  login(username: string, password: string) {
    const url = 'http://localhost:8000/login/';
    const body = new FormData();
    body.append('username', username);
    body.append('password', password);
    this.http.post<LoginResponse>(url, body).subscribe(response => {
      if (response.token) {
        // Inicio de sesión exitoso
        // Almacena el token y utilízalo en solicitudes posteriores para autenticar al usuario
        localStorage.setItem('token', response.token);
      } else {
        // Inicio de sesión fallido
        // Maneja el error
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  deleteBlog(id: number) {
    this.apiBlogs.deleteBlog(id).subscribe((response: { toString: any; }) => {
      console.log(response.toString)
    });
    
  }
}