import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../../models/User';
import { Event } from '../../models/Event';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-screen.component.html',
  styleUrls: ['./event-screen.component.css']
})
export class EventScreenComponent implements OnInit {
  EventListForm: FormGroup;
  submitted = false;
  clickCreateEvent: boolean;
  listEvents : Event[] = [];
  

  constructor(private formBuilder: FormBuilder, private _router: Router) { 
    this.EventListForm = this.formBuilder.group({});
    this.clickCreateEvent = false;
  }
  rowData$!:any;

  ngOnInit(): void {
    this.getEvents();
  }
  // console.log(localStorage.getItem('token'));
  //   return await axios.get(`${API}`, {
  //       headers: {
  //           'x-access-token': localStorage.getItem('token')
  //       }
  //   });
  getEvents(){
		// const response = axios.get(`http://api1.tvtracker.tk/api/series/`, {
    //   headers: {
    //     'x-access-token': localStorage.getItem('token')
    //   }
    const response = axios.get(`http://localhost:5432/api/events/`, {

		}).then((response) => {
      this.listEvents = response.data;
		}).catch((error) => {
			console.log(error);
		});
	}
  deleteEvent(id: String){
    console.log(id);
    if(!this.EventListForm.invalid){
      //const response = axios.delete(`http://api1.tvtracker.tk/api/series/${id}`)
      const response = axios.delete(`http://localhost:5432/api/events/${id}`)
      .then((response) => {
      this.getEvents();
 
      }).catch((error) => {
        console.log(error);
      });
    }
  }
  go2UpdateEvent(id: String){
    this._router.navigate([`/events-update/${id}`])
  }


}
