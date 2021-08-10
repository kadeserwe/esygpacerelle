import { enumLocalisation } from 'app/shared/model/enumerations/enum-localisation.model';

export interface IPiecesAdministratives {
  id?: number;
  codePiece?: string;
  libelle?: string;
  localisation?: enumLocalisation;
  type?: number;
}

export class PiecesAdministratives implements IPiecesAdministratives {
  constructor(
    public id?: number,
    public codePiece?: string,
    public libelle?: string,
    public localisation?: enumLocalisation,
    public type?: number
  ) {}
}
