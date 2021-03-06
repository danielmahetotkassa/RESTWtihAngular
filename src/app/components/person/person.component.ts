import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {


  persons: Person[];
  person2: Person[];
 
  
  constructor(private personService: PersonService) {
    this.persons = [];
  }

  ngOnInit() {

    this.personService.getPerson().subscribe((person2: Person[])=>{
      this.person2 = person2;

    });
  }

  deletePerson(person): void{
    this.personService.deletePerson(person)
    .subscribe( data => {
      alert("Person Deleted successfully.");
      this.ngOnInit();
    });
    

      //location.reload();

    
      

 
  }

}
