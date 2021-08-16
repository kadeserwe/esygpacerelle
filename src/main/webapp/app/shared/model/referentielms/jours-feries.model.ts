import { Moment } from 'moment';

export interface IJoursFeries {
  id?: number;
  date?: Moment;
  description?: string;
}

export class JoursFeries implements IJoursFeries {
  constructor(public id?: number, public date?: Moment, public description?: string) {}
}
