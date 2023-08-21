import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  createUserForm: FormGroup;
  submitted = false;
  clickCreateUser: boolean;
  constructor(private formBuilder: FormBuilder, private _router: Router) {
    this.createUserForm = this.formBuilder.group({});
    this.clickCreateUser = false;
  }

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      date: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  get formControls() {
    return this.createUserForm.controls;
  }
  onDateInputChange(event: any) {
    const selectedDate = event.target.value;
    const dateParts = selectedDate.split('-');
    const day = dateParts[2];
    const month = dateParts[1];
    const year = dateParts[0];
    const formattedDate = `${year}-${month}-${day}`; 
    this.createUserForm.patchValue({ date: formattedDate });
  }
  
  onSubmit() {
    this.submitted = true;

    // If form is invalid, do not proceed
    if (this.createUserForm.invalid) {
      return;
    }
    // Reset the form after successful submission
    this.createUserForm.reset();
    this.submitted = false;
  }


  sendCreateUser() {
    if (!this.createUserForm.invalid) {
      axios.post('http://localhost:5432/api/users/register', {
        name: this.createUserForm.value.name,
        username: this.createUserForm.value.username,
        password: this.createUserForm.value.password,
        date: this.createUserForm.value.date,
        email: this.createUserForm.value.email
      }).then((response) => {
        environment.auth = response.data.token;
        this._router.navigate(['/user-screen'])
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
