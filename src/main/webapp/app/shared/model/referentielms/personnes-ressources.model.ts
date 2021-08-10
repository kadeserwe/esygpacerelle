export interface IPersonnesRessources {
  id?: number;
  nom?: string;
  prenom?: string;
  telephone?: number;
  email?: string;
  fonction?: string;
  commentaires?: string;
}

export class PersonnesRessources implements IPersonnesRessources {
  constructor(
    public id?: number,
    public nom?: string,
    public prenom?: string,
    public telephone?: number,
    public email?: string,
    public fonction?: string,
    public commentaires?: string
  ) {}
}
