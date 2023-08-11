import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { Meeting } from 'src/app/models/Meeting';
@Component({
  selector: 'app-meeting-update',
  templateUrl: './meeting-update.component.html',
  styleUrls: ['./meeting-update.component.css']
})
export class MeetingUpdateComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  clickRegister: boolean;
  clickLogin: boolean;
  clickForgot: boolean;
  userDataErr: boolean = false;
  date: Date;

  meeting: Meeting = {
    _id: "",
    title: "",
    description: "",
    imageUrl: "",
    date: "",
    location: "",
    registration_fee: 0,
    lat: 0,
    lng: 0,
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
    this.getMeeting(params._id);
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      registration_fee: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],

    });
  }
  getMeeting(id: string) {
    const response = axios.get(`http://localhost:5432/api/meetings/${id}`, {

    }).then((response) => {
      console.log(response);
      this.meeting = response.data;
    }).catch((error) => {
      console.log(error);
    });

  }
  updateMeeting(id: any) {
    console.log("aqui");


    axios.put(`http://localhost:5432/api/meetings/edit/${id}`, {
      title: this.registerForm.value.title,
      description: this.registerForm.value.description,
      body_text: this.registerForm.value.body_text,
      imageUrl: this.registerForm.value.imageUrl,
    })
      .then((response) => {
        this._router.navigate(['/meeting-screen'])
      }).catch((error) => {
        console.log(error);
      });
  }
  onSubmit() {

  }

}
