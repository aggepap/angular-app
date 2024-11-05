import { Component } from '@angular/core';
import { ReactiveFormStructureComponent } from './reactive-form-structure/reactive-form-structure.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { ListGroupMenuComponent } from "../list-group-menu/list-group-menu.component";
import { EPerson, ManyPerson } from '../../shared/interfaces/person';


@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormStructureComponent, PersonTableComponent, SimpleDatatableComponent, ListGroupMenuComponent],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  currentPerson: EPerson | undefined;

  onPerson(person:EPerson){
    console.log(person);
    this.currentPerson = person;
    ManyPerson.push(person);
  }
}
