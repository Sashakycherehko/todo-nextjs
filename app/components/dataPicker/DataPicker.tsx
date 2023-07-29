"use client";
type FullYear = {
  month: [
    {
      name_month: string;
      max_day: number;
      day: Array<number>;
    }
  ];
  learYear: boolean;
  year: number;
};
class DataPicker {
  list_year: Array<FullYear> = [];

  get getCurrentYear(): number {
    let event: Date = new Date();
    return event.getFullYear();
  }

  public GenerateMonth(): void {
    let count_month: number = 0;
    let count_day: number = 0;

    const dayNames: string[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const monthNames: string[] = [
      "Jauary",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    console.log(
      `${monthNames[0]}\t${monthNames[1]}\t${monthNames[2]}\t${monthNames[3]}\t${monthNames[4]}\t${monthNames[5]}\t${monthNames[6]}\t${monthNames[7]}\t${monthNames[8]}\t${monthNames[9]}\t${monthNames[10]}\t${monthNames[11]}`
    );
  }

  generateListYear(list = this.list_year) {
    return list.push({
      month: [{ name_month: "Junary", max_day: 31, day: [23, 234] }],
      learYear: false,
      year: 2023,
    });
  }

  private isLeapYear(month: number[]): boolean {
    if (month.find((Item) => 29)) {
      return true;
    }

    return false;
  }
  generateDay(count: number): number[] {
    let arr: number[];
    for (let i = 0; i < count; i++) {
      arr.push(i);
    }

    return arr;
  }

  generateFullYear() {
    let event: Date = new Date();
    let current_day = event.getDay();
    let current_year = event.getFullYear();
    let current_month = event.getMonth();
    let current_date = event.getDate();
    let currentFullDayInYear = this.daysInYear(current_year);

    console.log(current_day, current_month, current_date, current_year);

    console.log(`${current_year}`, currentFullDayInYear);

    for (let i: number = current_date; i < currentFullDayInYear; i++) {
      event.setDate(i);
      let first_value = event.getDate();
      let first_weekday = event.toLocaleDateString("en", { weekday: "long" });
      event.setMonth(current_month + 1);
      event.setDate(0);
      let second_value = event.getDate();

      for (let k: number = first_value; k < second_value; k++) {
        console.log(k);
      }
      // let date = event.getDate();
      // let second_weekday = event.toLocaleDateString("en", { weekday: "long" });
    }
  }

  daysInMonth(month: number, year: number): number {
    return new Date(year, month, 0).getDate();
  }

  daysInYear(year: number) {
    var days = 0;

    for (var month = 1; month <= 12; month++) {
      days += this.daysInMonth(month, year);
    }

    return days;
  }
}

export const DatePicker = (): React.ReactNode => {
  let data_picker: DataPicker = new DataPicker();
  data_picker.generateFullYear();
  return <>{}</>;
};
