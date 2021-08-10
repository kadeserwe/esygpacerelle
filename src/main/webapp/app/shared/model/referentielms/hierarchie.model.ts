export interface IHierarchie {
  id?: number;
  libelle?: string;
}

export class Hierarchie implements IHierarchie {
  constructor(public id?: number, public libelle?: string) {}
}
