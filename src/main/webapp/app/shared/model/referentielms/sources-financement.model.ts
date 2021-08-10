export interface ISourcesFinancement {
  id?: number;
  libelle?: string;
  type?: string;
}

export class SourcesFinancement implements ISourcesFinancement {
  constructor(public id?: number, public libelle?: string, public type?: string) {}
}
