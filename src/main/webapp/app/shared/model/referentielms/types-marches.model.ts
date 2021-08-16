export interface ITypesMarches {
  id?: number;
  code?: string;
  libelle?: string;
  description?: string;
}

export class TypesMarches implements ITypesMarches {
  constructor(public id?: number, public code?: string, public libelle?: string, public description?: string) {}
}
