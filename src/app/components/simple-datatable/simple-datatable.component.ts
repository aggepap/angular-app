import { Component, EventEmitter, Output } from '@angular/core';
import { type EPerson ,ManyPerson} from '../../shared/interfaces/person';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-simple-datatable',
  standalone: true,
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
  @Output() personClicked = new EventEmitter<EPerson>();
manyPerson = ManyPerson;

sortOrder: EPerson = {
  givenName:"none",
  surname :"none",
  age: "none",
  email:"none",
  address:"none"
 
}

sortData(sortkey: keyof EPerson):void{
  if(this.sortOrder[sortkey] === "asc"){
    this.sortOrder[sortkey] = "desc";
    this.manyPerson = sortBy(this.manyPerson,sortkey).reverse();
  }else{  
    this.sortOrder[sortkey] = "asc";
    this.manyPerson = sortBy(this.manyPerson, sortkey);
  }
  for(const key in this.sortOrder){
 
// if(key !== sortkey):any{
 
// }


  }
  }
  sortSign(sortkey:keyof EPerson){
if(this.sortOrder[sortkey] ==="asc"){
  return "↑";
}if(this.sortOrder[sortkey]==="desc"){
  return "↓";
}
  return "";

}

onPersonClick(row:EPerson){
this.personClicked.emit(row);

}
  }


