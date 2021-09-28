import { Moment } from 'moment';

export interface IAvisGeneraux {
  id?: number;
  numero?: string;
  annee?: string;
  description?: string;
  fichierAvisContentType?: string;
  fichierAvis?: any;
  version?: number;
  lastVersionValid?: number;
  etat?: string;
  datePublication?: Moment;
}

export class AvisGeneraux implements IAvisGeneraux {
  constructor(
    public id?: number,
    public numero?: string,
    public annee?: string,
    public description?: string,
    public fichierAvisContentType?: string,
    public fichierAvis?: any,
    public version?: number,
    public lastVersionValid?: number,
    public etat?: string,
    public datePublication?: Moment
  ) {}
}
