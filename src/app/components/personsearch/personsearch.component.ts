import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-personsearch',
  templateUrl: './personsearch.component.html',
  styleUrls: ['./personsearch.component.css']
})
export class PersonsearchComponent implements OnInit {


  person: Person[];

  constructor(private personService: PersonService) {
    this.person = [];
  }

  ngOnInit() {
  }

  getPersons(): void{

    this.personService.getPerson().subscribe((person: Person[])=>{
      this.person = person;
  });

} 

}
