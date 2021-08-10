export interface IDirection {
  id?: number;
  sigle?: string;
  libelle?: string;
  description?: string;
}

export class Direction implements IDirection {
  constructor(public id?: number, public sigle?: string, public libelle?: string, public description?: string) {}
}
