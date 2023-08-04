interface NextWeek {
  nextWeek: string;
  currentNextDate: number;
}
export class DateHandler {
  constructor() {}

  get propetyiesToday(): string {
    let date = new Date();
    let today = date.toLocaleDateString("en-EN", { weekday: "short" });
    return today;
  }

  get propertiesTomorrow(): string {
    let date = new Date();
    let curentDate = date.getDate();
    date.setDate(curentDate + 1);
    let tomorrow = date.toLocaleDateString("en-EN", { weekday: "short" });
    return tomorrow;
  }

  get propertiesNextWeek(): NextWeek {
    let date = new Date();
    let currentDate = date.getDate();
    date.setDate(currentDate + 7);
    let nextWeek = date.toLocaleDateString("en-EN", { weekday: "short" });
    let currentNextDate = date.getDate();
    return {
      nextWeek,
      currentNextDate,
    };
  }
}

export default DateHandler;
