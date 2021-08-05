export interface IConfGenSequence {
  id?: number;
  tableName?: string;
  currentValue?: number;
}

export class ConfGenSequence implements IConfGenSequence {
  constructor(public id?: number, public tableName?: string, public currentValue?: number) {}
}
