import { Component, OnInit } from '@angular/core';
import {style} from "@angular/animations"
import { UtilisateurServices} from  './services/utilisateur.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'gestionEcole';
  isAuth = false

 

  
constructor(  ){

}
  ngOnInit(){
    
    
  }


  }

