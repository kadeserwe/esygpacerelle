export interface IBanque {
  id?: number;
  libelle?: string;
  sigle?: string;
}

export class Banque implements IBanque {
  constructor(public id?: number, public libelle?: string, public sigle?: string) {}
}
