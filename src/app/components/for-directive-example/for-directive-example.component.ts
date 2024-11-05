import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = [
    {
      givenName: "Aggelos",
      surname: "Papanagiotou",
      email: "Aggepap@gmail.com",
      age:38,
      address:"Asklipiou 2"
    },
    {
      givenName: "Ioanna",
    surname: "Kaniadaki",
    email: "Kaniadaki.ioanna@gmail.com",
    age:39,
    address:"Asklipiou 2"
    },
    {
    "givenName": "Natalie",
    "surname": "Rivera",
    "email": "nrrivera@hotmail.com",
    age: 68,
    "address": "Clearview City"
  },
  {
    "givenName": "Owen",
    "surname": "Cooper",
    "email": "om@gmail.com",
    age: 58,
    "address": "Wayne City"
  },
  {
    "givenName": "Mary",
    "surname": "Bailey",
    "email": "mary.a.bailey@ymail.com",
    age: 77,
    "address": "Wittman"
  },
  {
    "givenName": "Dylan",
    "surname": "Nelson",
    "email": "dylan_j97@gmail.com",
    age: 40,
    "address": "Partridge"
  },
  {
    "givenName": "Anna",
    "surname": "Edwards",
    "email": "annaedwards@live.com",
    age: 22,
    "address": "Evansville"
  },
  {
    "givenName": "Justin",
    "surname": "Davis",
    "email": "justin_davis19@aol.com",
    age: 46,
    "address": "Easton"
  },
  {
    "givenName": "Brian",
    "surname": "Martinez",
    "email": "b_martinez@ymail.com",
    "age": 67,
    "address": "Yabucoa"
  },
  {
    "givenName": "Nicole",
    "surname": "Gonzales",
    "email": "nicole.irene.gonzales@yahoo.com",
    "age": 36,
    "address": "Disputanta"
  },
  {
    "givenName": "Aiden",
    "surname": "James",
    "email": "aajames@gmail.com",
    "age": 26,
    "address": "Stockwell"
  },
  {
    "givenName": "Brian",
    "surname": "Cooper",
    "email": "brian@gmail.com",
    "age": 71,
    "address": "Dover"
  }
  ]
}
