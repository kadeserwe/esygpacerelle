import { DataType } from 'app/shared/model/enumerations/data-type.model';

export interface IConfTableRow {
  id?: number;
  tableName?: string;
  labelName?: string;
  columnName?: string;
  dataType?: DataType;
}

export class ConfTableRow implements IConfTableRow {
  constructor(
    public id?: number,
    public tableName?: string,
    public labelName?: string,
    public columnName?: string,
    public dataType?: DataType
  ) {}
}
