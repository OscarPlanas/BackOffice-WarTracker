import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { User } from '../../../models/User';


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
      const response = axios.delete(`http://localhost:5432/api/users/${id}`)
      .then((response) => {
      this.getUsers();
 
      }).catch((error) => {
        console.log(error);
      });
    }
  }
  go2UpdateUser(id: String){
    this._router.navigate([`/user-update/${id}`])
  }

}
