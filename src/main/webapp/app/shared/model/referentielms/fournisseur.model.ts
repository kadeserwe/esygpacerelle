import { Moment } from 'moment';

import { IPays } from 'app/shared/model/referentielms/pays.model';
import { ICategorieFournisseur } from './categorie-fournisseur.model';

export interface IFournisseur {
  id?: number;
  raisonSociale?: string;
  adresse?: string;
  email?: string;
  telephone?: string;
  pieceJointe?: string;
  numeroRegistreCommerce?: string;
  date?: Moment;
  sigle?: string;
  numeroIdentiteFiscale?: string;
  categorieFournisseur?: ICategorieFournisseur;
  pays?: IPays;
}

export class Fournisseur implements IFournisseur {
  constructor(
    public id?: number,
    public raisonSociale?: string,
    public adresse?: string,
    public email?: string,
    public telephone?: string,
    public pieceJointe?: string,
    public numeroRegistreCommerce?: string,
    public date?: Moment,
    public sigle?: string,
    public numeroIdentiteFiscale?: string,
    public categorieFournisseur?: ICategorieFournisseur,
    public pays?: IPays
  ) {}
}
