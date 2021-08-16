export interface IGarantie {
  id?: number;
  libelle?: string;
  typeGarantie?: string;
  description?: string;
}

export class Garantie implements IGarantie {
  constructor(public id?: number, public libelle?: string, public typeGarantie?: string, public description?: string) {}
}
