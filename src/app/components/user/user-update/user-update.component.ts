import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { User } from 'src/app/models/User';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  clickRegister: boolean;
  clickLogin: boolean;
  clickForgot: boolean;
  userDataErr: boolean = false;
  date: Date;

  user: User = {
    _id: "",
    name: "",
    username: "",
    date: "",
    email: "",
    imageUrl: "",
    backgroundImageUrl: "",
    about: "",
    password: "",
    isAdmin: false,
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
    this.getUser(params._id);
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      date: ['', Validators.required],
      email: ['', Validators.required],
      imageUrl: ['', Validators.required],
      backgroundImageUrl: ['', Validators.required],
      about: ['', Validators.required],

    });
  }
  getUser(id: string) {
    const response = axios.get(`http://localhost:5432/api/users/${id}`, {

    }).then((response) => {
      console.log(response);
      this.user = response.data;
    }).catch((error) => {
      console.log(error);
    });

  }
  updateUser(id: any) {
    console.log("aqui");


    axios.put(`http://localhost:5432/api/users/edit/${id}`, {
      name: this.registerForm.value.name,
      username: this.registerForm.value.username,
      date: this.registerForm.value.date,
      email: this.registerForm.value.email,
      imageUrl: this.registerForm.value.imageUrl,
      backgroundImageUrl: this.registerForm.value.backgroundImageUrl,
      about: this.registerForm.value.about,
     
    })
      .then((response) => {
        this._router.navigate(['/user-screen'])
      }).catch((error) => {
        console.log(error);
      });
  }
  onSubmit() {

  }

}
