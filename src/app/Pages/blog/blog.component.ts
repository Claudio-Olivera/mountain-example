import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from 'src/app/blog-service.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
blogs:any;

constructor(private apiBlogs:BlogServiceService){}
  
ngOnInit(): void {
    this.apiBlogs.getBlogs().subscribe((data)=>{
      this.blogs = data;
    })
  }



}
