import { Component, OnInit } from '@angular/core';
import series from '../../../data/series';
import * as $ from 'jquery';
import axios from 'axios';
import { Serie } from '../../models/Serie';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listSeries : Serie[] = [];


  constructor() { }

  ngOnInit(): void {
  }





  

}
