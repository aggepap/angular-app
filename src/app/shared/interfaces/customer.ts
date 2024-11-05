export interface PhoneNumbers {
  number: string;
  type: string;
}
export interface Address {
  street: string;
  city: string;
  zipCode: string;
  number: string;
}

export interface Customer {
  givenName: string;
  surName: string;
  email: string;
  afm: string;
  phoneNumber: PhoneNumbers[];
  address: Address;
}
