export interface IPays {
  id?: number;
  libelle?: string;
  codePays?: string;
}

export class Pays implements IPays {
  constructor(public id?: number, public libelle?: string, public codePays?: string) {}
}
