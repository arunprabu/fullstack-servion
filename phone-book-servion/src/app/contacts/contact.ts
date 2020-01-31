// model / schema for the front end
// custom data type
export interface IContact {
  id: number;
  name: string;
  phone: string;
  email: string;
}
// model class
export class Contact implements IContact{
  id: number;
  name: string;
  phone: string;
  email: string;

  // util methods
  
}
