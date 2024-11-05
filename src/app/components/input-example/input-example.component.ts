import { Component } from '@angular/core';
import { PersonTableComponent } from '../person-table/person-table.component';
import { Person } from '../../shared/interfaces/person';

@Component({
  selector: 'app-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './input-example.component.html',
  styleUrl: './input-example.component.css'
})
export class InputExampleComponent {
  person0: Person = {
    givenName: "Aggelos",
    surname: "Papanagiotou",
    email: "Aggepap@gmail.com",
    age:38,
    address:"Asklipiou 2"
  }
  person1: Person = {
    givenName: "Ioanna",
    surname: "Kaniadaki",
    email: "Kaniadaki.ioanna@gmail.com",
    age:39,
    address:"Asklipiou 2"
  }
}
