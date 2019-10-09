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
  person2: Person = new Person(2, "Daniel","belay");

  constructor(private personService: PersonService) {
    this.person = [];
  }

  ngOnInit() {
  }

getPersonsSearch(person): void{

  this.personService.getPersonBasedOnName(person).subscribe((person: Person[])=>{
    this.person = person;
});
}

deletePerson(person): void{
  this.personService.deletePerson(person)
  .subscribe( data => {
    alert("Person Deleted successfully.");
  });

}

} 


