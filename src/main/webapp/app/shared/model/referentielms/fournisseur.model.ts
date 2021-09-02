import { Moment } from 'moment';
import { ICategorieFournisseur } from 'app/shared/model/referentielms/categorie-fournisseur.model';
import { IPays } from 'app/shared/model/referentielms/pays.model';

export interface IFournisseur {
  id?: number;
  raisonSociale?: string;
  adresse?: string;
  email?: string;
  fax?: string;
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
    public fax?: string,
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
