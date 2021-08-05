export interface IPays {
  id?: number;
  libelle?: string;
  codepays?: string;
}

export class Pays implements IPays {
  constructor(public id?: number, public libelle?: string, public codepays?: string) {}
}
