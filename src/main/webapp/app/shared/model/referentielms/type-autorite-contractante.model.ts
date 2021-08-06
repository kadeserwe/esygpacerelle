export interface ITypeAutoriteContractante {
  id?: number;
  libelle?: string;
  code?: string;
  description?: string;
  ordre?: number;
  chapitre?: string;
}

export class TypeAutoriteContractante implements ITypeAutoriteContractante {
  constructor(
    public id?: number,
    public libelle?: string,
    public code?: string,
    public description?: string,
    public ordre?: number,
    public chapitre?: string
  ) {}
}
