import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-meeting-create',
  templateUrl: './meeting-create.component.html',
  styleUrls: ['./meeting-create.component.css']
})
export class MeetingCreateComponent implements OnInit {

  createMeetingForm: FormGroup;
  submitted = false;
  clickCreateMeeting: boolean;
  constructor(private formBuilder: FormBuilder, private _router: Router) {
    this.createMeetingForm = this.formBuilder.group({});
    this.clickCreateMeeting = false;
  }

  ngOnInit(): void {
    this.createMeetingForm = this.formBuilder.group({
      title: ['', Validators.required],
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required],
      date: ['', Validators.required],
      organizer: ['', Validators.required],
      location: ['', Validators.required],
      registration_fee: ['', Validators.required],

    });
  }
  get formControls() {
    return this.createMeetingForm.controls;
  }
  onDateInputChange(event: any) {
    const selectedDate = event.target.value;
    const dateParts = selectedDate.split('-');
    const day = dateParts[2];
    const month = dateParts[1];
    const year = dateParts[0];
    const formattedDate = `${year}-${month}-${day}`; // Correct format: yyyy-MM-dd
    this.createMeetingForm.patchValue({ date: formattedDate });
  }
  onSubmit() {
    this.submitted = true;

    // If form is invalid, do not proceed
    if (this.createMeetingForm.invalid) {
      return;
    }

    this.createMeetingForm.reset();
    this.submitted = false;
  }


  sendCreateMeeting() {
    if (!this.createMeetingForm.invalid) {
      axios.post('http://localhost:5432/api/meetings/', {
        title: this.createMeetingForm.value.title,
        imageUrl: this.createMeetingForm.value.imageUrl,
        description: this.createMeetingForm.value.description,
        lat: this.createMeetingForm.value.lat,
        lng: this.createMeetingForm.value.lng,
        date: this.createMeetingForm.value.date,
        organizer: this.createMeetingForm.value.organizer,
        location: this.createMeetingForm.value.location,
        registration_fee: this.createMeetingForm.value.registration_fee,
      }).then((response) => {
        environment.auth = response.data.token;
        this._router.navigate(['/meeting-screen'])
      }).catch((error) => {
        console.log(error);
      });
    }
  }

}
