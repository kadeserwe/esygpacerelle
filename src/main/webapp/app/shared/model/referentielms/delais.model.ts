import { Moment } from 'moment';

export interface IDelais {
  id?: number;
  libelle?: string;
  code?: string;
  unite?: string;
  valeur?: number;
  debutValidite?: Moment;
  finValidite?: Moment;
  commentaires?: string;
}

export class Delais implements IDelais {
  constructor(
    public id?: number,
    public libelle?: string,
    public code?: string,
    public unite?: string,
    public valeur?: number,
    public debutValidite?: Moment,
    public finValidite?: Moment,
    public commentaires?: string
  ) {}
}
