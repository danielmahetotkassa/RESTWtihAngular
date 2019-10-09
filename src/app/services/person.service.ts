import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from '../model/person';
import { Person2 } from '../model/person2';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personUrl = 'https://restendpoints.herokuapp.com/api';
  private postUrl =   'https://restendpoints.herokuapp.com/';

person: Person[];
person2 : Person2 = new Person2();

  constructor(private http: HttpClient) { }

  public getPerson() {
    return this.http.get<Person[]>(this.personUrl);
  }

  public deletePerson(person) {
    return this.http.delete(this.postUrl+ "/"+ person.id);
  }

  public createPerson(person) {
    return this.http.post<Person2>(this.postUrl, person);
  }
  public getPersonBasedOnName(person) {
    return this.http.get<Person[]>(this.postUrl + "/search/" + person.first_name);
  }

}
