export interface ICategories {
  id?: number;
  code?: string;
  designation?: string;
  commentaire?: string;
}

export class Categories implements ICategories {
  constructor(public id?: number, public code?: string, public designation?: string, public commentaire?: string) {}
}
