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
    // Navigate to Page One
    this.router.navigate(['/meeting-screen']);
  }

  navigateToCreateMeeting() {
    // Navigate to Page Two
    this.router.navigate(['/meeting-create']);
  }

}
