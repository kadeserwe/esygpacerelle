export interface IGroupesImputation {
  id?: number;
  libelle?: string;
  description?: string;
}

export class GroupesImputation implements IGroupesImputation {
  constructor(public id?: number, public libelle?: string, public description?: string) {}
}
