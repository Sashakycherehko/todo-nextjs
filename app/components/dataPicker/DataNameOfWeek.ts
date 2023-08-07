export class DataNameOfWeek {
  constructor() {}

  public generateNameOfWeek(): string[] {
    let date = new Date(2022, 0, 1);
    let list_name: string[] = [];

    for (let i = 2; i <= 8; i++) {
      date.setDate(i);
      list_name.push(date.toLocaleDateString("default", { weekday: "narrow" }));
    }

    return list_name;
  }
}

export default DataNameOfWeek;
