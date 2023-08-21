import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { Report } from '../../../models/Report';
@Component({
  selector: 'app-report-screen',
  templateUrl: './report-screen.component.html',
  styleUrls: ['./report-screen.component.css']
})
export class ReportScreenComponent implements OnInit {
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
  getReports(){

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
      const response = axios.delete(`http://localhost:5432/api/report/${id}`)
      .then((response) => {
      this.getReports();
 
      }).catch((error) => {
        console.log(error);
      });
    }
  }



}
