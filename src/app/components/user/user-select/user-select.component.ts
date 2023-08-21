import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.css']
})
export class UserSelectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToUsersList() {
    this.router.navigate(['/user-screen']);
  }

  navigateToCreateUser() {
    this.router.navigate(['/user-create']);
  }
}
