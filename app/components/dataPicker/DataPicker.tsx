"use client";
import { useState } from "react";
import { DateHandler } from "./DateHandler";
import DateRender, { returnDateValue } from "./DataRender";

interface StateDate {
  currentYear: number;
  currentMonth: number;
  currentDate: number;
  viewCurrentMonth: string;
}
export const DatePicker = (): React.ReactNode => {
  let date = new Date();
  let currentDate = date.getDate();
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth();
  let dateHandler = new DateHandler();
  let dateRender = new DateRender(currentYear, currentMonth, currentDate);
  const [ValueMonthAndyear, setValueMonthAndYear] = useState<returnDateValue>({
    year: dateRender.year,
    month: dateRender.month,
  });

  return (
    <>
      <div className="data-picker">
        <div className="data-today">
          <span>{dateHandler.propetyiesToday}</span>
        </div>
        <div className="data-tomorrow">
          <span>{dateHandler.propertiesTomorrow}</span>
        </div>
        <div className="data-nextWeek">
          <span>{dateHandler.propertiesNextWeek.nextWeek}</span>{" "}
          <span>{dateHandler.propertiesNextWeek.currentNextDate}</span>
        </div>
        <div className="data-generates">
          <div className="data-title">
            <div className="data-buttons">
              <div className="button-back">
                <button
                  onClick={() => {
                    dateRender.clickHandlerDecrementMonth();
                  }}
                >
                  Back
                </button>
              </div>
              <button className="button-restore">restore</button>
              <div className="button-next">
                <button
                  onClick={() => {
                    setValueMonthAndYear({
                      year: (ValueMonthAndyear.year += 1),
                      month: (ValueMonthAndyear.month += 1),
                    });
                    console.log(dateRender.month);
                  }}
                >
                  Next
                </button>
              </div>
              <div className="data-month">
                <h1>{ValueMonthAndyear.month}</h1>
              </div>
              <div className="data-year">
                <h1>{ValueMonthAndyear.year}</h1>
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
