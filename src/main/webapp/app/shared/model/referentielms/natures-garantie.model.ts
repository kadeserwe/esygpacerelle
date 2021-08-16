export interface INaturesGarantie {
  id?: number;
  libelle?: string;
}

export class NaturesGarantie implements INaturesGarantie {
  constructor(public id?: number, public libelle?: string) {}
}
