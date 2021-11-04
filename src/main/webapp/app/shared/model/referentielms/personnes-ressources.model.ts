export interface IPersonnesRessources {
  id?: number;
  prenom?: string;
  nom?: string;
  email?: string;
  telephone?: number;
  fonction?: string;
  commentaires?: string;
}

export class PersonnesRessources implements IPersonnesRessources {
  constructor(
    public id?: number,
    public prenom?: string,
    public nom?: string,
    public email?: string,
    public telephone?: number,
    public fonction?: string,
    public commentaires?: string
  ) {}
}
