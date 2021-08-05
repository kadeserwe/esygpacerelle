export interface IFonction {
  id?: number;
  libelle?: string;
  description?: string;
}

export class Fonction implements IFonction {
  constructor(public id?: number, public libelle?: string, public description?: string) {}
}
