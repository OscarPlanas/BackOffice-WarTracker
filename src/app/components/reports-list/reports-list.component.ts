import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../../models/User';
import { Report } from '../../models/Report';
@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
  ReportListForm: FormGroup;
  submitted = false;
  clickCreateEvent: boolean;
  listReports : Report[] = [];
  

  constructor(private formBuilder: FormBuilder, private _router: Router) { 
    this.ReportListForm = this.formBuilder.group({});
    this.clickCreateEvent = false;
  }
  rowData$!:any;

  ngOnInit(): void {
    this.getReports();
  }
  // console.log(localStorage.getItem('token'));
  //   return await axios.get(`${API}`, {
  //       headers: {
  //           'x-access-token': localStorage.getItem('token')
  //       }
  //   });
  getReports(){
		// const response = axios.get(`http://api1.tvtracker.tk/api/series/`, {
    //   headers: {
    //     'x-access-token': localStorage.getItem('token')
    //   }
    const response = axios.get(`http://localhost:5432/api/report/`, {

		}).then((response) => {
      this.listReports = response.data;
		}).catch((error) => {
			console.log(error);
		});
	}
  deleteReport(id: String){
    console.log(id);
    if(!this.ReportListForm.invalid){
      //const response = axios.delete(`http://api1.tvtracker.tk/api/series/${id}`)
      const response = axios.delete(`http://localhost:5432/api/report/${id}`)
      .then((response) => {
      this.getReports();
 
      }).catch((error) => {
        console.log(error);
      });
    }
  }


}

