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

  private baseUrl = 'https://young-woodland-47552.herokuapp.com/persons';
  private personUrl = 'http://localhost:8080/api';
  private postUrl =   'http://localhost:8080/';

person: Person[];
person2 : Person2 = new Person2();

  constructor(private http: HttpClient) { }

  list(): Observable<Person[]> {

    const url = `${this.baseUrl}/`;
    return this.http.get(url).pipe(
      map((data: any[]) => data.map((person: any) => new Person(
      person.id,
      person.first_name,
      person.last_name,
      ))),
    );
  }

  public getPerson() {
    return this.http.get<Person[]>(this.personUrl);
  }

  public deletePerson(person) {
    return this.http.delete(this.postUrl+ "/"+ person.id);
  }

  public createPerson(person) {
    return this.http.post<Person2>(this.postUrl, person);
  }
  public getPersonBasedOnName(name : string) {
    return this.http.get<Person[]>(this.personUrl + "/name");
  }

}
