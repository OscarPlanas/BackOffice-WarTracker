import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-create-serie',
  templateUrl: './create-serie.component.html',
  styleUrls: ['./create-serie.component.css']
})
export class CreateSerieComponent implements OnInit {
  createSerieForm: FormGroup;
  submitted = false;
  clickCreateSerie: boolean;
  imageSaved?: string;

  constructor(private formBuilder: FormBuilder, private _router: Router) {
    this.createSerieForm = this.formBuilder.group({});
    this.clickCreateSerie = false;
   }

  ngOnInit(): void {
    this.createSerieForm = this.formBuilder.group({
      title: ['', Validators.required],
      overview: ['', Validators.required],
      poster_path: ['', Validators.required],
      number_of_seasons: ['', Validators.required],
      number_of_episodes:  ['', Validators.required],
      status:  ['', Validators.required],
    })
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

  sendCreateSerie() {
    if(!this.createSerieForm.invalid){
      //axios.post('http://api1.tvtracker.tk/api/series/', {
      axios.post('http://localhost:5432/api/series/', {
        title: this.createSerieForm.value.title,
        overview: this.createSerieForm.value.description,
        poster_path: this.imageSaved,
        number_of_seasons: this.createSerieForm.value.number_of_seasons,
        number_of_episodes: this.createSerieForm.value.number_of_episodes,
        status: this.createSerieForm.value.status
      }).then((response) => {
        environment.auth = response.data.token;
        this._router.navigate([''])
      }).catch((error) => {
        console.log(error);
      });
    }
    
  }

}

