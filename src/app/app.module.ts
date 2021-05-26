import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

import { UtilisateurServices} from"./services/utilisateur.service"
import { from } from 'rxjs';
/* import { RestComponent } from './rest/rest.component';
 */

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent
    /* RestComponent */,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    UtilisateurServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
