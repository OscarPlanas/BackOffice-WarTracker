import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { Serie } from 'src/app/models/Serie';
import { HttpParams } from '@angular/common/http';
import { __values } from 'tslib';

@Component({
  selector: 'app-series-update',
  templateUrl: './series-update.component.html',
  styleUrls: ['./series-update.component.css']
})
export class SeriesUpdateComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  clickRegister: boolean;
  clickLogin: boolean;
  clickForgot: boolean; 
  userDataErr: boolean = false;
  date: Date;
  uponAge: boolean = false;
  samepass: boolean = false;

  serie:Serie={
    _id:"",
    title:"",
	  overview:"",
	  status:""
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
    this.getSerie(params._id);
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      overview: ['', Validators.required],
      status: ['', Validators.required],
      repeatPass: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  getSerie(id:string){
		//const response = axios.get(`http://api1.tvtracker.tk/api/users/profile/${id}`, {
    const response = axios.get(`http://localhost:5432/api/series/${id}`, {

		}).then((response) => {
      console.log(response);
      this.serie=response.data;
		}).catch((error) => {
			console.log(error);
		});
    
	}
  updateSerie(id: any) {
    console.log("aqui");
    

    axios.put(`http://localhost:5432/api/series/${id}` , {
			title: this.registerForm.value.title,
			overview: this.registerForm.value.overview,
			status: this.registerForm.value.status,
		})
    .then((response) => {
      this._router.navigate(['/series-list'])
    }).catch((error) => {
      console.log(error);
    });
  }
  onSubmit() {
  
	}

}
