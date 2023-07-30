import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { Blog } from '../../../models/Blog';

@Component({
  selector: 'app-blog-screen',
  templateUrl: './blog-screen.component.html',
  styleUrls: ['./blog-screen.component.css']
})
export class BlogScreenComponent implements OnInit {

  BlogListForm: FormGroup;
  submitted = false;
  clickCreateEvent: boolean;
  listBlogs: Blog[] = [];

  constructor(private formBuilder: FormBuilder, private _router: Router) {
    this.BlogListForm = this.formBuilder.group({});
    this.clickCreateEvent = false;
  }
  rowData$!: any;

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    //const response = axios.get(`http://api1.tvtracker.tk/api/users/`, {
    const response = axios.get(`http://localhost:5432/api/blogs/`, {

    }).then((response) => {
      this.listBlogs = response.data;
      //print(this.listBlogs.);
    }).catch((error) => {
      console.log(error);
    });
  }
  deleteUser(id: String) {
    console.log(id);
    if (!this.BlogListForm.invalid) {
      //const response = axios.delete(`http://api1.tvtracker.tk/api/users/${id}`)
      const response = axios.delete(`http://localhost:5432/api/blogs/${id}`)
        .then((response) => {
          this.getBlogs();

        }).catch((error) => {
          console.log(error);
        });
    }
  }
  go2UpdateUser(id: String) {
    this._router.navigate([`/blogs-update/${id}`])
  }


  // Function to check if the content is clipped
  isClipped(content: string | undefined): boolean {
    if (!content) {
      return false; // Return false if the content is undefined or empty
    }

    const element = document.createElement('div');
    element.innerHTML = content;
    return element.scrollWidth > element.clientWidth;
  }

  // Function to get the blog's body text by its id
  getBlogTextById(blogId: string): string {
    const blog = this.listBlogs.find((blog) => blog._id === blogId);
    return blog?.body_text || '';
  }
  isAdaptiveMode: boolean = false;

  // Function to toggle between adaptive and clipped content modes
  toggleContentMode(): void {
    this.isAdaptiveMode = !this.isAdaptiveMode;
  }
}
