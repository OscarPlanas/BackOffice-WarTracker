import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { Serie } from 'src/app/models/Serie';
import { Event } from 'src/app/models/Event';
import { HttpParams } from '@angular/common/http';
import { __values } from 'tslib';

@Component({
  selector: 'app-events-update',
  templateUrl: './events-update.component.html',
  styleUrls: ['./events-update.component.css']
})
export class EventsUpdateComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  clickRegister: boolean;
  clickLogin: boolean;
  clickForgot: boolean; 
  userDataErr: boolean = false;
  date: Date;
  uponAge: boolean = false;
  samepass: boolean = false;

  event:Event={
    _id:"",
    title:"",
	  description:"",
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
    this.getEvent(params._id);
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
    });
  }
  getEvent(id:string){
		//const response = axios.get(`http://api1.tvtracker.tk/api/users/profile/${id}`, {
    const response = axios.get(`http://localhost:5432/api/events/${id}`, {

		}).then((response) => {
      console.log(response);
      this.event=response.data;
		}).catch((error) => {
			console.log(error);
		});
    
	}
  updateEvent(id: any) {
    console.log("aqui");
    

    axios.put(`http://localhost:5432/api/events/${id}` , {
			title: this.registerForm.value.title,
			description: this.registerForm.value.description,
		})
    .then((response) => {
      this._router.navigate(['/event-screen'])
    }).catch((error) => {
      console.log(error);
    });
  }
  onSubmit() {
  
	}

}
