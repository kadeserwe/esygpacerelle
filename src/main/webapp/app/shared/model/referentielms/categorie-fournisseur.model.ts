export interface ICategorieFournisseur {
  id?: number;
  libelle?: string;
  description?: string;
}

export class CategorieFournisseur implements ICategorieFournisseur {
  constructor(public id?: number, public libelle?: string, public description?: string) {}
}
