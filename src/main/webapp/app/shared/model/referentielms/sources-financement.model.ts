export interface ISourcesFinancement {
  id?: number;
  code?: string;
  libelle?: string;
  corbeille?: string;
}

export class SourcesFinancement implements ISourcesFinancement {
  constructor(public id?: number, public code?: string, public libelle?: string, public corbeille?: string) {}
}
