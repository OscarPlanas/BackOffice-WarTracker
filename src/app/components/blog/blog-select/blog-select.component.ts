import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-select',
  templateUrl: './blog-select.component.html',
  styleUrls: ['./blog-select.component.css']
})
export class BlogSelectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToBlogsList() {
    this.router.navigate(['/blog-screen']);
  }

  navigateToCreateBlog() {
    this.router.navigate(['/blog-create']);
  }

}
