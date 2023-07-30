// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { environment } from 'src/environments/environment';
// import { ActivatedRoute } from '@angular/router';
// import axios from 'axios';
// import { Observable } from 'rxjs';
// import { User } from 'src/app/models/User';
// import { HttpParams } from '@angular/common/http';
// import { __values } from 'tslib';

// @Component({
//   selector: 'app-users-update',
//   templateUrl: './users-update.component.html',
//   styleUrls: ['./users-update.component.css']
// })
// export class UsersUpdateComponent implements OnInit {
//   registerForm: FormGroup;
//   submitted = false;
//   clickRegister: boolean;
//   clickLogin: boolean;
//   clickForgot: boolean; 
//   userDataErr: boolean = false;
//   date: Date;
//   uponAge: boolean = false;
//   samepass: boolean = false;

//   user:User={
//     _id:"",
//     name:"",
// 	  username:"",
// 	  password:"",
// 	  birthdate:new Date(""),
// 	  email:""
//   }
//   constructor(private formBuilder: FormBuilder, private _router: Router, private activedRoute: ActivatedRoute) {
//     this.registerForm = this.formBuilder.group({});
//     this.clickRegister = true;
//     this.clickLogin = false;
//     this.clickForgot = false;
//     this.date = new Date();
//    }

//   ngOnInit(): void {
//     const params = this.activedRoute.snapshot.params;
//     console.log(params);
//     this.getUser(params._id);
//     this.registerForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       username: ['', Validators.required],
//       password: ['', Validators.required],
//       repeatPass: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       dateBirth: [ String(this.user.birthdate.getFullYear() + '-' + this.user.birthdate.getMonth() + "-" + this.user.birthdate.getDate()), Validators.required],
//     });
//   }
//   getUser(id:string){
// 		//const response = axios.get(`http://api1.tvtracker.tk/api/users/profile/${id}`, {
//     const response = axios.get(`http://localhost:5432/api/users/profile/${id}`, {

// 		}).then((response) => {
//       console.log(response);
//       this.user=response.data;
// 		}).catch((error) => {
// 			console.log(error);
// 		});
    
// 	}
//   updateUser(id: any) {

//     let date1 = this.registerForm.value.dateBirth;
//     console.log("aqui");
//     console.log(date1);
    
//     if (date1 === "NaN-NaN-NaN") {
//       console.log("pasa");
//       this.registerForm.value.dateBirth = this.user.birthdate;
//     }

//     axios.put(`http://localhost:5432/api/users/${id}` , {

// 			name: this.registerForm.value.name,
// 			username: this.registerForm.value.username,
// 			email: this.registerForm.value.email,
// 			birthdate: this.registerForm.value.dateBirth,
// 		})
//     .then((response) => {
//       this._router.navigate(['/userlist'])
//     }).catch((error) => {
//       console.log(error);
//     });
//   }
//   onSubmit() {
// 	}

// }
