import { Interface } from "readline";

interface WeekDay {
  weekDay: string;
  numberInCalendar: number[];
}

interface returnDateValue {
  year: number;
  month: number;
}
export class DateRender {
  date: Date;
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    (this.year = year), (this.month = month), (this.day = day);
    this.date = new Date(year, month, day);
  }

  get propertiesMonthInDataRender() {
    return this.date.toLocaleDateString("en-EN", { month: "long" });
  }

  get propertiesYearInDataRender() {
    return this.date.toLocaleDateString("en-EN", { year: "numeric" });
  }
  public createColumnCalendar() {
    let list_weekDay: Array<WeekDay> = [];
  }

  public daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }

  public clickHandlerDecrementMonth() {
    if (this.month == 0) {
      return (this.year -= 1), (this.month = 11);
    }
    return this.year, (this.month -= 1);
  }

  public clickHandlerIncrementMonth(): returnDateValue {
    if (this.month == 11) {
      return {
        year: (this.year += 1),
        month: (this.month = 0),
      };
    }
    return {
      year: this.year,
      month: (this.month += 1),
    };
  }

  public createRowAndColumnCalendar<WeekDay>() {}
}

export default DateRender;
