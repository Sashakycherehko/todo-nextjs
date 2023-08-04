interface WeekDay {
  weekDay: string;
  numberInCalendar: number[];
}
export class DateRender {
  date: Date;
  constructor(month: number, year: number, day: number) {
    this.date = new Date(year, month, day);
  }

  public createColumnCalendar() {
    let list_weekDay: Array<WeekDay> = [];
  }

  public createRowAndColumnCalendar<WeekDay>() {}
}
