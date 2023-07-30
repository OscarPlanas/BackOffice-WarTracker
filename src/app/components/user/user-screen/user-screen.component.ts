import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { User } from '../../../models/User';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.css']
})
export class UserScreenComponent implements OnInit {
  UserListForm: FormGroup;
  submitted = false;
  clickCreateEvent: boolean;
  listUsers : User[] = [];

  constructor(private formBuilder: FormBuilder, private _router: Router) { 
    this.UserListForm = this.formBuilder.group({});
    this.clickCreateEvent = false;
  }

  rowData$!:any;

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
		//const response = axios.get(`http://api1.tvtracker.tk/api/users/`, {
    const response = axios.get(`http://localhost:5432/api/users/`, {

		}).then((response) => {
      this.listUsers = response.data;
		}).catch((error) => {
			console.log(error);
		});
	}
  deleteUser(id: String){
    console.log(id);
    if(!this.UserListForm.invalid){
      //const response = axios.delete(`http://api1.tvtracker.tk/api/users/${id}`)
      const response = axios.delete(`http://localhost:5432/api/users/${id}`)
      .then((response) => {
      this.getUsers();
 
      }).catch((error) => {
        console.log(error);
      });
    }
  }
  go2UpdateUser(id: String){
    this._router.navigate([`/users-update/${id}`])
  }

}
