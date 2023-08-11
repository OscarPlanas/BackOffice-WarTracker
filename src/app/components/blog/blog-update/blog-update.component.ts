import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { Blog } from 'src/app/models/Blog';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css']
})
export class BlogUpdateComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  clickRegister: boolean;
  clickLogin: boolean;
  clickForgot: boolean;
  userDataErr: boolean = false;
  date: Date;
  uponAge: boolean = false;
  samepass: boolean = false;

  blog: Blog = {
    _id: "",
    title: "",
    description: "",
    body_text: "",
    imageUrl: ""
  }
  constructor(private formBuilder: FormBuilder, private _router: Router, private activedRoute: ActivatedRoute) {
    this.registerForm = this.formBuilder.group({});
    this.clickRegister = true;
    this.clickLogin = false;
    this.clickForgot = false;
    this.date = new Date();
  }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    console.log(params);
    this.getBlog(params._id);
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      body_text: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }
  getBlog(id: string) {
    const response = axios.get(`http://localhost:5432/api/blogs/${id}`, {

    }).then((response) => {
      console.log(response);
      this.blog = response.data;
    }).catch((error) => {
      console.log(error);
    });

  }
  updateBlog(id: any) {
    console.log("aqui");


    axios.put(`http://localhost:5432/api/blogs/edit/${id}`, {
      title: this.registerForm.value.title,
      description: this.registerForm.value.description,
      body_text: this.registerForm.value.body_text,
      imageUrl: this.registerForm.value.imageUrl,
    })
      .then((response) => {
        this._router.navigate(['/blog-screen'])
      }).catch((error) => {
        console.log(error);
      });
  }
  onSubmit() {

  }


}
