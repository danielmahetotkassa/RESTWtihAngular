import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './components/update/update.component';
import { PersonComponent } from './components/person/person.component';
import { PersonaddComponent } from './components/personadd/personadd.component';
import { PersonsearchComponent } from './components/personsearch/personsearch.component';


const routes: Routes = [

  {path: 'allPerson', component: PersonComponent},
  {path: 'addPerson', component: PersonaddComponent},
  {path: 'searchPerson', component: PersonsearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
