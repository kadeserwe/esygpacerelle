export interface IModeSelection {
  id?: number;
  libelle?: string;
  code?: string;
  description?: string;
}

export class ModeSelection implements IModeSelection {
  constructor(public id?: number, public libelle?: string, public code?: string, public description?: string) {}
}
