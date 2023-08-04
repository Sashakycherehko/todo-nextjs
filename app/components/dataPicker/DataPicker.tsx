"use client";
import { useState } from "react";
import { DateHandler } from "./DateHandler";

interface StateDate {
  currentYear: number;
  currentMonth: number;
  currentDate: number;
  viewCurrentMonth: string;
}
export const DatePicker = (): React.ReactNode => {
  let dateHandler = new DateHandler();
  let date = new Date();
  let currentDate = date.getDate();
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth();
  let viewCurrentMonth = date.toLocaleDateString("en-EN", { month: "long" });

  const [viewDate, setdate] = useState<Date>(new Date());
  const [currentCount, setCurrentCount] = useState(currentMonth);

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
            <div className="data-month">
              <h1>{viewDate.toLocaleDateString("en-EN", { month: "long" })}</h1>
            </div>
            <div className="data-year">
              <h1>
                {viewDate.toLocaleDateString("en-EN", { year: "numeric" })}
              </h1>
            </div>

            <div className="data-buttons">
              <div className="button-back">
                <button>Back</button>
              </div>
              <button className="button-restore">restore</button>
              <div className="button-next">
                <button
                  onClick={() => {
                    let newDate = new Date(currentYear, currentCount);
                    setCurrentCount(currentCount + 1);
                    newDate.setMonth(currentCount);
                    setdate(newDate);
                  }}
                >
                  Next
                </button>
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
