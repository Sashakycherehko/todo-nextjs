"use client";
import { useState } from "react";
import { DateHandler } from "./DateHandler";
import DateRender from "./DataRender";
import DataNameOfWeek from "./DataNameOfWeek";
import { spawn } from "child_process";

export const DatePicker = (): React.ReactNode => {
  let date = new Date();
  let currentDate = date.getDate();
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth();
  let dateHandler = new DateHandler();
  let dataNameOfweek = new DataNameOfWeek();
  let dateRender = new DateRender();
  dateRender.generateRowsAndColomuns();
  dateRender.GenerateDaysInCalendar(new Date());

  return (
    <>
      <div className="data-picker">
        <div className="data-input">
          <input type="text" placeholder="Type a due date" />
        </div>
        <div className="data-WeekDays">
          <div className="data-today">
            <h3>Today</h3>
            <span>{dateHandler.propetyiesToday}</span>
          </div>
          <div className="data-tomorrow">
            <h3>Tomorrow</h3>
            <span>{dateHandler.propertiesTomorrow}</span>
          </div>
          <div className="data-nextWeek">
            <h3>Next Week</h3>
            <div>
              <span>{dateHandler.propertiesNextWeek.nextWeek}</span>
              <span>{dateHandler.propertiesNextWeek.currentNextDate}</span>
            </div>
          </div>
        </div>
        <div className="data-generates">
          <div className="data-title">
            <div className="nameofWeek-name">
              <div className="data-month">
                <h1>{}</h1>
              </div>
              <div className="data-year">
                <h1></h1>
              </div>
            </div>
            <div className="data-buttons">
              <div className="button-back">
                <button>Back</button>
              </div>
              <div className="button-back">
                <button>restore</button>
              </div>

              <div className="button-next">
                <button>Next</button>
              </div>
            </div>
          </div>
          <div className="data-calendar">
            <div className="data-nameOfWeek"></div>
            <div className="data-days"></div>
          </div>
        </div>
        <div className="data-time">
          <button>+ Add time</button>
        </div>
      </div>
    </>
  );
};
