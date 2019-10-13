import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/model/person';
import { Person2 } from 'src/app/model/person2';

@Component({
  selector: 'app-personadd',
  templateUrl: './personadd.component.html',
  styleUrls: ['./personadd.component.css']
})
export class PersonaddComponent {

  person: Person2 = new Person2();

  constructor(private router: Router, private personService: PersonService) {

  }

  createPerson(): void {
    this.personService.createPerson(this.person)
        .subscribe( data => {

          alert(this.person.first_name + " "+ this.person.last_name + " Added successfully.");
          this.person.first_name = "";
          this.person.last_name=""
        });

  };

}
