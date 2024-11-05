import { Component, inject } from '@angular/core';
import { CrudNavbarComponent } from '../crud-navbar/crud-navbar.component';
import { CustomerService } from '../../../shared/services/customer.service';
import {
  FormGroup,
  FormControl,
  FormArray,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import type { Customer } from '../../../shared/interfaces/customer';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-crud-update-example',
  standalone: true,
  imports: [
    CrudNavbarComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    NgFor,
    NgIf,
  ],
  templateUrl: './crud-update-example.component.html',
  styleUrl: './crud-update-example.component.css',
})
export class CrudUpdateExampleComponent {
  customerService = inject(CustomerService);

  searchForm = new FormGroup({
    search: new FormControl(''),
  });

  form = new FormGroup({
    givenName: new FormControl('', Validators.required),
    surName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    afm: new FormControl('', Validators.required),
    phoneNumbers: new FormArray([
      new FormGroup({
        number: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required),
      }),
    ]),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
    }),
  });

  phoneNumbers = this.form.get('phoneNumbers') as FormArray;

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }
  addPhoneNumber() {
    this.phoneNumbers.push(
      new FormGroup({
        number: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required),
      })
    );
  }
  onSubmit(value: any) {}
  search() {
    const searchValue = this.searchForm.value.search ?? '';
    this.customerService.getCustomerByAFM(searchValue).subscribe((customer) => {
      console.log(customer);
      this.form.patchValue({
        givenName: customer.givenName,
        surName: customer.surName,
        email: customer.email,
        afm: customer.afm,
        address: customer.address,
      });
      this.phoneNumbers.clear();
      // customer.phoneNumber.forEach(
      //   this.phoneNumbers.push(
      //     new FormGroup({
      //       number: new FormControl(phoneNumber.number, Validators.required),
      //       type: new FormControl(phoneNumber.type, Validators.required),
      //     })
      //   )
      // );
    });
  }
}
