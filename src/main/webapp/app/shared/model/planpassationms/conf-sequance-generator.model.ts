export interface IConfSequanceGenerator {
  id?: number;
  nomTable?: string;
  currentValue?: number;
}

export class ConfSequanceGenerator implements IConfSequanceGenerator {
  constructor(public id?: number, public nomTable?: string, public currentValue?: number) {}
}
