import { Document } from 'mongoose';

export class Address {
  state: string;
  city: string;
  street: string;
  zipcode: number;
}

export class User extends Document {
  username: string;
  password: string;
  addresses: Array<Address>;
}

export class UserData {
  id: string;
  username: string;
  password?: string;
  addresses: Array<Address>;
}
