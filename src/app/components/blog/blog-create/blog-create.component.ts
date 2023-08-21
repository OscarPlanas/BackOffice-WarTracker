import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  createBlogForm: FormGroup;
  submitted = false;
  clickCreateBlog: boolean;
  constructor(private formBuilder: FormBuilder, private _router: Router) {
    this.createBlogForm = this.formBuilder.group({});
    this.clickCreateBlog = false;
  }

  ngOnInit(): void {
    this.createBlogForm = this.formBuilder.group({
      title: ['', Validators.required],
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],
      body_text: ['', Validators.required],
      author: ['', Validators.required],
      date: ['', Validators.required],

    });
  }
  get formControls() {
    return this.createBlogForm.controls;
  }
  onDateInputChange(event: any) {
    const selectedDate = event.target.value;
    const dateParts = selectedDate.split('-');
    const day = dateParts[2];
    const month = dateParts[1];
    const year = dateParts[0];
    const formattedDate = `${year}-${month}-${day}`; 
    this.createBlogForm.patchValue({ date: formattedDate });
  }
  onSubmit() {
    this.submitted = true;

    if (this.createBlogForm.invalid) {
      return;
    }

    this.createBlogForm.reset();
    this.submitted = false;
  }


  sendCreateBlog() {
    if (!this.createBlogForm.invalid) {
      axios.post('http://localhost:5432/api/blogs/', {
        title: this.createBlogForm.value.title,
        imageUrl: this.createBlogForm.value.imageUrl,
        description: this.createBlogForm.value.description,
        body_text: this.createBlogForm.value.body_text,
        date: this.createBlogForm.value.date,
        author: this.createBlogForm.value.author,
      }).then((response) => {
        environment.auth = response.data.token;
        this._router.navigate(['/blog-screen'])
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
