import { Moment } from 'moment';
import { IPays } from 'app/shared/model/referentielms/pays.model';

export interface IConfigurationTaux {
  id?: number;
  code?: string;
  libelle?: string;
  taux?: number;
  dateDebut?: Moment;
  dateFin?: Moment;
  invalid?: boolean;
  pays?: IPays;
}

export class ConfigurationTaux implements IConfigurationTaux {
  constructor(
    public id?: number,
    public code?: string,
    public libelle?: string,
    public taux?: number,
    public dateDebut?: Moment,
    public dateFin?: Moment,
    public invalid?: boolean,
    public pays?: IPays
  ) {
    this.invalid = this.invalid || false;
  }
}
