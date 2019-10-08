import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';


import { UpdateComponent } from './components/update/update.component';
import { PersonaddComponent } from './components/personadd/personadd.component';
import { PersonsearchComponent } from './components/personsearch/personsearch.component';
import { AddbuttonComponent } from './components/addbutton/addbutton.component';




@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    MenuComponent,
    UpdateComponent,
    PersonaddComponent,
    PersonsearchComponent,
    AddbuttonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
