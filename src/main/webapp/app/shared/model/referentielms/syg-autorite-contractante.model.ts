import { ITypeAutoriteContractante } from 'app/shared/model/referentielms/type-autorite-contractante.model';

export interface ISygAutoriteContractante {
  id?: number;
  ordre?: number;
  denomination?: string;
  responsable?: string;
  adresse?: string;
  telephone?: string;
  fax?: string;
  email?: string;
  sigle?: string;
  urlsiteweb?: string;
  approbation?: string;
  logoContentType?: string;
  logo?: any;
  typeAutoriteContractante?: ITypeAutoriteContractante;
}

export class SygAutoriteContractante implements ISygAutoriteContractante {
  constructor(
    public id?: number,
    public ordre?: number,
    public denomination?: string,
    public responsable?: string,
    public adresse?: string,
    public telephone?: string,
    public fax?: string,
    public email?: string,
    public sigle?: string,
    public urlsiteweb?: string,
    public approbation?: string,
    public logoContentType?: string,
    public logo?: any,
    public typeAutoriteContractante?: ITypeAutoriteContractante
  ) {}
}
