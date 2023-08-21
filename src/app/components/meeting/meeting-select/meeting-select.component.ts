import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-select',
  templateUrl: './meeting-select.component.html',
  styleUrls: ['./meeting-select.component.css']
})
export class MeetingSelectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToMeetingsList() {
    this.router.navigate(['/meeting-screen']);
  }

  navigateToCreateMeeting() {
    this.router.navigate(['/meeting-create']);
  }

}
