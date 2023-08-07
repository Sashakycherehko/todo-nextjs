import DataNameOfWeek from "./DataNameOfWeek";

export class DateRender {
  constructor() {}

  public generateRowsAndColomuns(): any[][] {
    let arr = [];

    for (let i = 0; i < 7; i++) {
      arr.push([]);
    }

    return arr;
  }

  public GetFullDaysInMonth() {}

  public GenerateDaysInCalendar(date: Date) {
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();
    let cuurentDate = date.getDate();
    let countDaysInMonth = new Date(currentYear, currentMonth, 0).getDate();
    let dataNameOfWeek = new DataNameOfWeek().generateNameOfWeek();
    let arr_cell = this.generateRowsAndColomuns();
    for (let i = 0; i < arr_cell.length; i++) {
      arr_cell.push(dataNameOfWeek);
    }

    // for (let i: number = 1; i < arr_cell.length; i++) {
    //   for (let k: number = 1; k < countDaysInMonth; k++) {
    //     if (k % 7 == 0) {
    //       i++;
    //     }
    //   }
    // }
    console.log(arr_cell);
  }
}

export default DateRender;
