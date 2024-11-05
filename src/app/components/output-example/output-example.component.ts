import { Component, Inject } from '@angular/core';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EPerson, Person } from '../../shared/interfaces/person';
import{
  type Dialog,
  type DialogRef,
  DIALOG_DATA,
  DialogModule
} from '@angular/cdk/dialog'
import { PersonTableComponent } from '../person-table/person-table.component';
import { template } from 'lodash-es';


@Component({
  selector: 'app-output-example',
  standalone: true,
  imports: [SimpleDatatableComponent, DialogModule],
  templateUrl: './output-example.component.html',
  styleUrl: './output-example.component.css'
})

export class OutputExampleComponent {
  // constructor(public dialog:Dialog){

  // }
showPersonClicked(person: EPerson){
//  this.dialog.open(PersonDialogComponent, {data: person})
}
personTemplate(person: EPerson){
  return `
  Person Details : 
  firstname: ${person.givenName}
  Lastname: ${person.surname}
  Age: ${person.age}
  Email: ${person.email}
  address: ${person.address}
  `
}
}
// @Component({
//   imports:[PersonTableComponent],
//   standalone:true,
//   template: `
//   <app-person-table [person]= "person"></app-person-table>
//   <button class="btn btn-primary, btn-sm" (click)='dialogRef.close()'>Close</button>
//   `,
//   styles:[
//     `
//     :host{
//       display:block;
//       background: #fff;
//       border-radius: 8px;
//       padding: 16px;
//       max-width: 500px;

//     }
//     `,
//   ],
// });
// // biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
// export class PersonDialogComponent{
//   constructor(
//     public dialogRef: DialogRef,
//     @Inject(DIALOG_DATA) public person: Person;
//   ){}
// }