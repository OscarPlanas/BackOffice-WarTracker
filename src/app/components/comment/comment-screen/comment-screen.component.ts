import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { Comment } from '../../../models/Comment';



@Component({
  selector: 'app-comment-screen',
  templateUrl: './comment-screen.component.html',
  styleUrls: ['./comment-screen.component.css']
})
export class CommentScreenComponent implements OnInit {
  CommentsListForm: FormGroup;
  submitted = false;
  clickCreateEvent: boolean;
  listComments : Comment[] = [];

  constructor(private formBuilder: FormBuilder, private _router: Router) { 
    this.CommentsListForm = this.formBuilder.group({});
    this.clickCreateEvent = false;
  }
  rowData$!:any;
  ngOnInit(): void {
    this.getComments();
  }
  getComments(){
		//const response = axios.get(`http://api1.tvtracker.tk/api/users/`, {
    const response = axios.get(`http://localhost:5432/api/comments/allcomments`, {

		}).then((response) => {
      this.listComments = response.data;
		}).catch((error) => {
			console.log(error);
		});
	}
  deleteComment(id: String){
    console.log(id);
    if(!this.CommentsListForm.invalid){
      //const response = axios.delete(`http://api1.tvtracker.tk/api/users/${id}`)
      const response = axios.delete(`http://localhost:5432/api/comments/deletecomment/${id}`)
      .then((response) => {
      this.getComments();
 
      }).catch((error) => {
        console.log(error);
      });
    }
  }

}
