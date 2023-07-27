export class Day {
  lang: string = "default";
  date: Date = new Date();
  Date: Date = this.date;
  string_date: number = this.date.getDate();
  day: string = this.date.toLocaleString(this.lang, { weekday: "long" });
  day_number = this.date.getDay() + 1;

  constructor() {
    console.log(
      this.lang,
      this.date,
      this.Date,
      this.string_date,
      this.day,
      this.day_number
    );
  }
}
