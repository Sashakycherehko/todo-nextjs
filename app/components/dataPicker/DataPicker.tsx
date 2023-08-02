"use client";
let date = new Date();
let currentDay = date.getDay();
let currentDate = date.getDate();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
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

function generateDaysInMonth(month: number, year: number) {
  let dayInMonth = daysInMonth(month, year);
  let arr: number[] = [];
  for (let i = 1; i <= dayInMonth; i++) {
    arr.push(i);
  }

  return arr;
}

function daysInMonth(month: number, year: number): number {
  return new Date(year, month, 0).getDate();
}

export const DatePicker = (): React.ReactNode => {
  let arr: number[] = generateDaysInMonth(currentMonth, currentYear);
  let objdate = new Date();
  let today = new Date(
    currentYear,
    currentMonth,
    currentDate
  ).toLocaleDateString("default", { weekday: "short" });
  let tomorrow = new Date(
    currentYear,
    currentMonth,
    currentDate + 1
  ).toLocaleDateString("default", { weekday: "short" });
  // let thisWeekend = new Date(
  //   currentYear,
  //   currentMonth,
  //   currentDate + 7
  // ).toLocaleDateString("default", { weekday: "short", day: "numeric" });
  let nextWeek = new Date(
    currentYear,
    currentMonth,
    currentDate + 7
  ).toLocaleDateString("default", { weekday: "short", day: "numeric" });

  return (
    <>
      <div className="data-picker">
        <div className="data-today">{today}</div>
        <div className="data-tomorrow">{tomorrow}</div>
        <div className="data-nextWeek">{nextWeek}</div>
        <div className="data-generates">
          <div className="data-title">
            <div className="data-month"></div>
            <div className="data-day"></div>

            <div className="data-buttons">
              <div className="button-back">
                <button>Back</button>
              </div>
              <button className="button-restore">restore</button>
              <div className="button-next">
                <button>Next</button>
              </div>
            </div>
          </div>
          <div className="data-nameOfWeek">
            <h1>Sunday</h1>
            <h1>Monday</h1>
            <h1>Tuesday</h1>
            <h1>Wednesday</h1>
            <h1>Thursday</h1>
            <h1>Friday</h1>
            <h1>Saturday</h1>
          </div>
          <div className="data-days"></div>
        </div>
      </div>
    </>
  );
};
