import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  createEventForm: FormGroup;
  submitted = false;
  clickCreateEvent: boolean;
  imageSaved? : string; 

  
  constructor(private formBuilder: FormBuilder, private _router: Router) { 
    this.createEventForm = this.formBuilder.group({});
    this.clickCreateEvent = false;
  }

  ngOnInit(): void {
    this.createEventForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
      //owner: ['', Validators.required],
      //date: ['', Validators.required],
      //location: ['', Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
  }
  
  

   onFileInputChange = async ({target}: {target:any}) => {
    if(target.files === 0) return "";
     
   const cloudUrl = 'https://api.cloudinary.com/v1_1/dl8v2gowj/upload';
    const formData= new FormData();
    console.log("esto es el target file : " + target.files[0])
   formData.append('upload_preset', 'ea-event');
    formData.append('file',target.files[0])
    
 
    try {
      const resp = await fetch(cloudUrl,{
       method: 'POST',
       body: formData
     });
     console.log(resp);
      if(!resp.ok) throw new Error('No se pudo subir imagen')
     const cloudResp = await resp.json();
   console.log(cloudResp.secure_url);
     this.imageSaved = cloudResp.secure_url;
      return cloudResp.secure_url
    }
   catch (error) {
       
     throw new Error('No hay ningun archivo a subir')
 
   }
     
  }

  
  sendCreateEvent(){
		if(!this.createEventForm.invalid){
		axios.post('http://localhost:5432/api/events/', {
    //axios.post('http://api1.tvtracker.tk/api/events/', {
			title: this.createEventForm.value.title,
			description: this.createEventForm.value.description,
      image: this.imageSaved
		//	owner: this.createEventForm.value.owner,
		//	date: this.createEventForm.value.date,
			//location: this.createEventForm.value.location
		}).then((response) => {
			environment.auth = response.data.token;
			this._router.navigate(['/event-screen'])
		}).catch((error) => {
			console.log(error);
		});
	}
	}
}
