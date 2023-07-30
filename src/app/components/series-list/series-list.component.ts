import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../../models/User';
import { Serie } from '../../models/Serie';
@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  SerieListForm: FormGroup;
  submitted = false;
  clickCreateEvent: boolean;
  listSeries : Serie[] = [];
  

  constructor(private formBuilder: FormBuilder, private _router: Router) { 
    this.SerieListForm = this.formBuilder.group({});
    this.clickCreateEvent = false;
  }
  rowData$!:any;

  ngOnInit(): void {
    this.getSeries();
  }
  // console.log(localStorage.getItem('token'));
  //   return await axios.get(`${API}`, {
  //       headers: {
  //           'x-access-token': localStorage.getItem('token')
  //       }
  //   });
  getSeries(){
		// const response = axios.get(`http://api1.tvtracker.tk/api/series/`, {
    //   headers: {
    //     'x-access-token': localStorage.getItem('token')
    //   }
    const response = axios.get(`http://localhost:5432/api/series/`, {

		}).then((response) => {
      this.listSeries = response.data;
		}).catch((error) => {
			console.log(error);
		});
	}
  deleteSerie(id: String){
    console.log(id);
    if(!this.SerieListForm.invalid){
      //const response = axios.delete(`http://api1.tvtracker.tk/api/series/${id}`)
      const response = axios.delete(`http://localhost:5432/api/series/${id}`)
      .then((response) => {
      this.getSeries();
 
      }).catch((error) => {
        console.log(error);
      });
    }
  }
  go2UpdateSerie(id: String){
    this._router.navigate([`/series-update/${id}`])
  }


}
