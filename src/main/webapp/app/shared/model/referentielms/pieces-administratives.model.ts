import { enumLocalisation } from 'app/shared/model/enumerations/enum-localisation.model';

export interface IPiecesAdministratives {
  id?: number;
  code?: string;
  libelle?: string;
  description?: string;
  localisation?: enumLocalisation;
  type?: number;
}

export class PiecesAdministratives implements IPiecesAdministratives {
  constructor(
    public id?: number,
    public code?: string,
    public libelle?: string,
    public description?: string,
    public localisation?: enumLocalisation,
    public type?: number
  ) {}
}
