import { Moment } from 'moment';
import { DataType } from 'app/shared/model/enumerations/data-type.model';

export interface IConfTableDeTransaction {
  id?: number;
  tableName?: string;
  columnName?: string;
  numeroLigne?: number;
  dataType?: DataType;
  masterId?: number;
  intValue?: number;
  booleanValue?: boolean;
  moneyValue?: number;
  stringValue?: string;
  textValue?: any;
  dateValue?: Moment;
  instantValue?: Moment;
  zonedDateTimeValue?: Moment;
  longValue?: number;
  floatValue?: number;
  doubleValue?: number;
  durationValue?: number;
  uuidValue?: string;
}

export class ConfTableDeTransaction implements IConfTableDeTransaction {
  constructor(
    public id?: number,
    public tableName?: string,
    public columnName?: string,
    public numeroLigne?: number,
    public dataType?: DataType,
    public masterId?: number,
    public intValue?: number,
    public booleanValue?: boolean,
    public moneyValue?: number,
    public stringValue?: string,
    public textValue?: any,
    public dateValue?: Moment,
    public instantValue?: Moment,
    public zonedDateTimeValue?: Moment,
    public longValue?: number,
    public floatValue?: number,
    public doubleValue?: number,
    public durationValue?: number,
    public uuidValue?: string
  ) {
    this.booleanValue = this.booleanValue || false;
  }
}
