import { formatNumber } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { isJSDocNamepathType} from "typescript"
import { UtilisateurServices } from '../services/utilisateur.service';


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

/*  @Input() utilisateurName: any | undefined
  @Input() utilisateurStatus: any | undefined 
 */
  /*  @Input() utilisateurName: any | undefined
    @Input() utilisateurStatus: any | undefined
   */
  /*  @Input() utilisateurName: any | undefined
    @Input() utilisateurStatus: any | undefined
   */
  /*  @Input() utilisateurName: any | undefined
    @Input() utilisateurStatus: any | undefined
   */

  @Input() utilisateurStatus!: string;
  @Input() indexOfUtilisateur!: number;

  
  public title = 'finance' 
  private _info: any[] = [
    {
      infoName: 'finacier',
      description: 'gerrer la page finance',
      imageUrl: 'assets/person.png'
    }
  ];
  utilisateurs: any =[]
  constructor(  private utilisateurService: UtilisateurServices){

  }
  ngOnInit(): void {
    this.utilisateurs = this.utilisateurService.utilisateurs
  }
/*    getColor(){ 
    if(this.utilisateurStatus ==='payer'){
      return 'green'
    }else if (this.utilisateurStatus===  'Non-payer')
    return  'red '
  } */
  /*    getColor(){
      if(this.utilisateurStatus ==='payer'){
        return 'green'
      }else if (this.utilisateurStatus===  'Non-payer')
      return  'red '
    } */
  public showbadge: boolean = false;
  public statusDePayement(): void{
    this.showbadge = !this.showbadge
  }
 
}
