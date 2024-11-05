import { Component, Input } from '@angular/core';
import { TemplateFormComponent } from './template-form/template-form.component';
import { type EPerson , ManyPerson } from '../../shared/interfaces/person';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { PersonTableComponent } from '../person-table/person-table.component';
@Component({
  selector: 'app-template-driver-forms',
  standalone: true,
  imports: [TemplateFormComponent, SimpleDatatableComponent, PersonTableComponent,],
  templateUrl: './template-driver-forms.component.html',
  styleUrl: './template-driver-forms.component.css'
})
export class TemplateDriverFormsComponent {
  
currentPerson: EPerson | undefined;

onPerson(person:EPerson){
  console.log(person);
  this.currentPerson = person
ManyPerson.push(person);  
console.log("currentPerson>> ", this.currentPerson);


}
}
