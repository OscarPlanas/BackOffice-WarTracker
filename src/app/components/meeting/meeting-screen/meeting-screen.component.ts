import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { Meeting } from '../../../models/Meeting';

@Component({
  selector: 'app-meeting-screen',
  templateUrl: './meeting-screen.component.html',
  styleUrls: ['./meeting-screen.component.css']
})
export class MeetingScreenComponent implements OnInit {

  MeetingListForm: FormGroup;
  submitted = false;
  clickCreateEvent: boolean;
  listMeetings: Meeting[] = [];

  constructor(private formBuilder: FormBuilder, private _router: Router) {
    this.MeetingListForm = this.formBuilder.group({});
    this.clickCreateEvent = false;
  }
  rowData$!: any;

  ngOnInit(): void {
    this.getMeetings();
  }

  getMeetings() {
    const response = axios.get(`http://localhost:5432/api/meetings/`, {

    }).then((response) => {
      this.listMeetings = response.data;
    }).catch((error) => {
      console.log(error);
    });
  }
  deleteUser(id: String) {
    console.log(id);
    if (!this.MeetingListForm.invalid) {
      const response = axios.delete(`http://localhost:5432/api/meetings/${id}`)
        .then((response) => {
          this.getMeetings();

        }).catch((error) => {
          console.log(error);
        });
    }
  }
  go2UpdateUser(id: String) {
    this._router.navigate([`/blogs-update/${id}`])
  }


  // Function to check if the content is clipped
  isClipped(content: string | undefined): boolean {
    if (!content) {
      return false; // Return false if the content is undefined or empty
    }

    const element = document.createElement('div');
    element.innerHTML = content;
    return element.scrollWidth > element.clientWidth;
  }

  // Function to get the blog's body text by its id
  getBlogTextById(meetingId: string): string {
    const meeting = this.listMeetings.find((meeting) => meeting._id === meetingId);
    return meeting?.description || '';
  }
  isAdaptiveMode: boolean = false;

  // Function to toggle between adaptive and clipped content modes
  toggleContentMode(): void {
    this.isAdaptiveMode = !this.isAdaptiveMode;
  }

}
