export interface ISpecialitesPersonnel {
  id?: number;
  libelle?: string;
}

export class SpecialitesPersonnel implements ISpecialitesPersonnel {
  constructor(public id?: number, public libelle?: string) {}
}
