/* import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Utilisateurs } from '../utilisateurs';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
utilisateurs: Utilisateurs[]= []
  constructor( public rs: RestService)  { }

  ngOnInit(): void {
    this.rs.getUtilisateurs().subscribe((Response) =>{
      this.utilisateurs=Response
    })
  }

}
 */