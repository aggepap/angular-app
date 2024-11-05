import {
  AfterViewInit,
  Component,
  EventEmitter,
  output,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from '../../../shared/interfaces/person';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent implements AfterViewInit {
  @ViewChild('form', { static: false }) form: NgForm | undefined;

  @Output() person = new EventEmitter<EPerson>();

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.form) {
        this.form.setValue({
          givenName: 'John',
          surname: 'Doe',
          age: 33,
          email: 'Johndoe@mail.com',
          address: 'road2',
        });
      }
    }, 0);
  }

  // @Output() person = new EventEmitter<EPerson>();

  onSubmit(value: any) {
    // this.person.emit(value as EPerson);
    console.log(this.form?.form.get('givenName')?.value);
    this.person.emit(value as EPerson);
  }
}
