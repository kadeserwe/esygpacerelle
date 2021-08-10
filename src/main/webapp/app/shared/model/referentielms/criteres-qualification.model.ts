export interface ICriteresQualification {
  id?: number;
  libelle?: string;
}

export class CriteresQualification implements ICriteresQualification {
  constructor(public id?: number, public libelle?: string) {}
}
