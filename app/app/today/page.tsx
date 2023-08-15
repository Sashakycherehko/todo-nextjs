"use client";
import { InputList } from "@/components/navigation/input_list/InputList";
import { useState } from "react";
import logo_profile from "../../../public/images/vaider.png";

export const Today = (): React.ReactNode => {
  return (
    <>
      <nav className="navigation">
        <div className="navigation-leftside">
          <button className="leftside_button-menu">
            <svg
              className="menu_icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M4.5 5h15a.5.5 0 110 1h-15a.5.5 0 010-1zm0 6h15a.5.5 0 110 1h-15a.5.5 0 110-1zm0 6h15a.5.5 0 110 1h-15a.5.5 0 110-1z"
              ></path>
            </svg>
          </button>
          <button className="leftside_button-home">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M12.527 3.075c.35.104.64.263 1.27.876L19.1 9.123c.374.364.49.505.601.678.11.174.185.351.232.552.042.178.062.34.066.742L20 17.718c0 .446-.046.607-.134.77a.906.906 0 01-.378.378c-.163.088-.324.134-.77.134H14v-4.718c0-.446-.046-.607-.134-.77a.906.906 0 00-.378-.378c-.142-.077-.284-.122-.616-.132L12.718 13h-1.436c-.446 0-.607.046-.77.134a.906.906 0 00-.378.378c-.077.142-.122.284-.132.616l-.002.154V19H5.282c-.446 0-.607-.046-.77-.134a.906.906 0 01-.378-.378c-.088-.163-.134-.324-.134-.77v-6.462c0-.522.02-.703.067-.903.047-.2.121-.378.232-.552l.077-.113c.098-.134.233-.282.524-.565l5.304-5.172c.629-.613.92-.772 1.269-.876a1.82 1.82 0 011.054 0zm-.286.958a.825.825 0 00-.482 0c-.18.054-.326.139-.63.418l-.227.216L5.598 9.84c-.3.293-.385.39-.456.5a.76.76 0 00-.102.242c-.026.112-.037.224-.04.531l.002 6.807.005.073.074.006L8.999 18 9 14.268l.003-.17c.013-.448.083-.749.249-1.058a1.9 1.9 0 01.788-.788c.306-.164.6-.234 1.043-.249l.199-.003h1.45l.17.003c.448.013.749.083 1.058.249.337.18.608.45.788.788.164.306.234.6.249 1.043l.003.199L14.999 18l3.92-.002.073-.006.006-.073.002-.2v-6.615l-.005-.218a1.494 1.494 0 00-.035-.305.747.747 0 00-.102-.242l-.059-.084a3.571 3.571 0 00-.294-.315l-5.407-5.273c-.425-.414-.604-.545-.798-.615l-.06-.019z"
              ></path>
            </svg>
          </button>
          <div className="leftside_input-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              aria-hidden="true"
              className="search_icon"
            >
              <path
                d="M10.5 3a7.5 7.5 0 015.645 12.438l4.709 4.708a.502.502 0 01-.708.708l-4.708-4.709A7.5 7.5 0 1110.5 3zm0 1a6.5 6.5 0 100 13 6.5 6.5 0 000-13z"
                fill="currentColor"
              ></path>
            </svg>
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className="navigation-rightside">
          <button className="rightside-add-task">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" fill-rule="evenodd" transform="translate(4 3)">
                <mask id="jd4FBg" fill="#fff">
                  <path d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"></path>
                </mask>
                <g mask="url(#jd4FBg)">
                  <path fill="currentColor" d="M-4-3h24v24H-4z"></path>
                </g>
              </g>
            </svg>
          </button>
          <div className="rightside-productivity">
            <button className="button-productivity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <g fill="currentColor" fill-rule="nonzero">
                    <g>
                      <g>
                        <path
                          d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 1c-4.418 0-8 3.582-8 8 0 .702.09 1.383.26 2.031l2.886-2.885c.196-.195.512-.195.708 0l2.646 2.647 4.793-4.794L13 9c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.52l.052.005L16.5 8c.036 0 .071.004.105.011l.046.012.04.015c.014.005.027.012.04.019.013.006.025.013.036.02l.035.025c.014.01.027.02.04.033l.012.011.011.013c.012.012.023.025.033.039l-.044-.052c.026.027.05.056.069.087l.02.034.02.042.014.04c.005.015.009.03.012.046l.006.033.005.051V12c0 .276-.224.5-.5.5s-.5-.224-.5-.5V9.706l-5.146 5.148c-.196.195-.512.195-.708 0L7.5 12.207 4.618 15.09C5.827 17.974 8.677 20 12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8z"
                          transform="translate(-564 -480) translate(528 444) translate(36 36)"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
            <div className="modal-productivity"></div>
          </div>
          <div className="rightside-help_information">
            <button className="button-help_information">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 3a9 9 0 11-.001 18.001A9 9 0 0112 3zm0 1a8 8 0 100 16 8 8 0 000-16zm-.093 10.794c.47 0 .802.355.802.856 0 .495-.331.85-.802.85-.471 0-.808-.355-.808-.85 0-.501.337-.856.808-.856zm.128-7.294c1.465 0 2.465.954 2.465 2.213 0 .96-.47 1.639-1.215 2.11-.738.458-.948.8-.948 1.443v.397H11.32v-.562c-.006-.808.366-1.358 1.163-1.86.674-.433.936-.818.936-1.473 0-.758-.559-1.314-1.425-1.314-.878 0-1.436.544-1.5 1.418H9.5c.064-1.32.901-2.372 2.535-2.372z"
                  fill="currentColor"
                  fill-rule="nonzero"
                ></path>
              </svg>
            </button>
            <div className="modal-help_information"></div>
          </div>
          <div className="rightside-help_notification">
            <button className="button-help_notification">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 3a5.75 5.75 0 015.75 5.75c0 3.24.682 5.875 2.03 7.927A1.5 1.5 0 0118.525 19H14.5a2.5 2.5 0 01-5 0H5.475a1.501 1.501 0 01-1.254-2.323C5.568 14.625 6.25 11.989 6.25 8.75A5.75 5.75 0 0112 3zm1.5 16h-3a1.5 1.5 0 003 0zM12 4a4.75 4.75 0 00-4.75 4.75c0 3.423-.731 6.248-2.193 8.476a.5.5 0 00.418.774h13.05a.5.5 0 00.418-.774c-1.462-2.227-2.193-5.053-2.193-8.476A4.75 4.75 0 0012 4z"
                  fill="currentColor"
                  fill-rule="nonzero"
                ></path>
              </svg>
            </button>
            <div className="modal-help_notification"></div>
          </div>
          <div className="rightside-help_profile">
            <img className="button-help_profile" src={logo_profile.src} />
            <div className="modal-help_profile"></div>
          </div>
        </div>
      </nav>

      <div className="modal-Add-task">
        <div className="modal">
          <div className="modal-task_editor">
            <div className="editor-inputs">
              <input type="text" role="task-name" placeholder="Task name" />
              <input
                type="text"
                role="task-description"
                placeholder="Description"
              />
            </div>
            <div className="editor-selections">
              <div className="selection-actions">
                <div className="editor-selections_date">
                  <div role="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="date_today"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h8zm0 1H4a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1zm-1.25 7a.75.75 0 110 1.5.75.75 0 010-1.5zm.75-5a.5.5 0 110 1h-7a.5.5 0 010-1h7z"
                      ></path>
                    </svg>
                    <span>Today</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.854 11.854a.5.5 0 000-.708L8.707 8l3.147-3.146a.5.5 0 00-.708-.708L8 7.293 4.854 4.146a.5.5 0 10-.708.708L7.293 8l-3.147 3.146a.5.5 0 00.708.708L8 8.707l3.146 3.147a.5.5 0 00.708 0z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="selections_date">
                    <div className="date-curentDate">
                      <span role="dateCurrentMonth">Aug</span>
                      <span role="date-current-day">15</span>
                    </div>
                    <div className="date-selectionWeekDays">
                      <div
                        className="date-selectionWeekDays_tomorrow"
                        role="select-date"
                      >
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="scheduler-suggestions-item-icon--tomorrow"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <g fill="currentColor" fill-rule="nonzero">
                              <path
                                d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                                opacity=".1"
                              ></path>
                              <path d="M9.704 17.543a.5.5 0 0 1 .27.654l-.956 2.31a.5.5 0 0 1-.924-.383l.957-2.31a.5.5 0 0 1 .653-.27zm5.245.27l.957 2.31a.5.5 0 0 1-.924.383l-.956-2.31a.5.5 0 0 1 .923-.382zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm-5.543 6.796a.5.5 0 0 1-.27.653l-2.31.957a.5.5 0 0 1-.383-.924l2.31-.956a.5.5 0 0 1 .653.27zm11.74-.27l2.31.956a.5.5 0 0 1-.383.924l-2.31-.957a.5.5 0 0 1 .383-.923zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm-8.124-.406l2.31.957a.5.5 0 0 1-.383.923l-2.31-.956a.5.5 0 0 1 .383-.924zm16.9.27a.5.5 0 0 1-.27.654l-2.31.956a.5.5 0 0 1-.382-.923l2.31-.957a.5.5 0 0 1 .653.27zM9.019 3.495l.956 2.31a.5.5 0 0 1-.923.382l-.957-2.31a.5.5 0 1 1 .924-.382zm6.617-.27a.5.5 0 0 1 .271.652l-.957 2.31a.5.5 0 0 1-.923-.383l.956-2.31a.5.5 0 0 1 .653-.27z"></path>
                            </g>
                          </svg>
                          Tomorrow
                        </span>
                        <span role="WeekDay">Wed</span>
                      </div>
                      <div
                        className="date-selectionWeekDays_laterThisWeek"
                        role="select-date"
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            className="scheduler-suggestions-item-icon--later-this-week"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              d="M6 4.5h12c.8 0 1.5.7 1.5 1.5v2.5h-15V6c0-.8.7-1.5 1.5-1.5z"
                              opacity="0.1"
                            ></path>
                            <path
                              fill="currentColor"
                              d="M18 4a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h12zm0 1H6a1 1 0 00-1 1v12c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1zm-2 10a1 1 0 110 2 1 1 0 010-2zm1-7a.5.5 0 010 1H7a.5.5 0 010-1h10z"
                            ></path>
                          </svg>
                          Later this week
                        </span>
                        <span role="WeekDay">Thu</span>
                      </div>
                      <div
                        className="date-selectionWeekDays_thisWeekend"
                        role="select-date"
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="scheduler-suggestions-item-icon--weekend"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              fill="currentColor"
                              d="M16 6a3 3 0 013 3v1h.1c1 0 1.9 1 1.9 2v4c0 1-.8 2-1.9 2H18v.5a.5.5 0 01-1 0V18H7v.5a.5.5 0 01-1 0V18H5a2 2 0 01-2-2v-4c0-1.1.9-2 2-2V9a3 3 0 013-3h8zm3 5a1 1 0 00-1 .9V15H6v-3a1 1 0 00-2-.1V16c0 .5.4 1 .9 1H19a1 1 0 001-.9V12c0-.6-.4-1-1-1zm-3-4H8c-1 0-2 .8-2 1.9v1.4c.6.3 1 1 1 1.7v2h10v-2a2 2 0 011-1.7V9c0-1-.8-2-1.9-2H16z"
                            ></path>
                          </svg>
                          This Weekend
                        </span>
                        <span role="WeekDay">Sat</span>
                      </div>
                      <div
                        className="date-selectionWeekDays_nextWeek"
                        role="select-date"
                      >
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="scheduler-suggestions-item-icon--next-week"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <g fill="currentColor" fill-rule="evenodd">
                              <path
                                fill-rule="nonzero"
                                d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                                opacity=".1"
                              ></path>
                              <path
                                fill-rule="nonzero"
                                d="M18 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12zm0 1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-2.109 8.188l.007.01-.004-.005-.003-.005zM17 8a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1h10zm-1 5.52a.504.504 0 0 1-.023.131l-.015.04a.494.494 0 0 1-.05.093l-.014.018a.503.503 0 0 1-.033.04l-2.511 2.512a.5.5 0 0 1-.765-.638l.057-.07L14.292 14H8.5a.5.5 0 0 1-.492-.41L8 13.5a.5.5 0 0 1 .41-.492L8.5 13h5.792l-1.646-1.646a.5.5 0 0 1 .638-.765l.07.057 2.511 2.513.017.019.009.01-.027-.03.03.035.029.04a.52.52 0 0 1 .066.162l.008.052v.007l-.002-.026.005.072v.02z"
                              ></path>
                            </g>
                          </svg>
                          Next Week
                        </span>
                        <div role="NextWeekDate">
                          <span className="weekDay">Mon</span>
                          <span className="month">Aug</span>
                          <span className="day">21</span>
                        </div>
                      </div>
                      <div
                        className="date-selectionWeekDays_noDate"
                        role="no-date"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            fill="currentColor"
                            d="M12 3a9 9 0 110 18 9 9 0 010-18zm0 1a8 8 0 100 16 8 8 0 000-16zm3.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                          ></path>
                        </svg>
                        <span>No Date</span>
                      </div>
                    </div>
                    <div className="date-calendar"></div>
                    <div className="date-add_time">
                      <button className="addTime">+ Add time</button>
                    </div>
                  </div>
                </div>
                <div className="editor-selections_priority">
                  <div role="button">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="Gw1i-E3"
                      data-icon-name="priority-icon"
                      data-priority="4"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 3a.5.5 0 01.276-.447C3.025 2.179 4.096 2 5.5 2c.901 0 1.485.135 2.658.526C9.235 2.885 9.735 3 10.5 3c1.263 0 2.192-.155 2.776-.447A.5.5 0 0114 3v6.5a.5.5 0 01-.276.447c-.749.375-1.82.553-3.224.553-.901 0-1.485-.135-2.658-.526C6.765 9.615 6.265 9.5 5.5 9.5c-1.08 0-1.915.113-2.5.329V13.5a.5.5 0 01-1 0V3zm1 5.779v-5.45C3.585 3.113 4.42 3 5.5 3c.765 0 1.265.115 2.342.474C9.015 3.865 9.599 4 10.5 4c1.002 0 1.834-.09 2.5-.279v5.45c-.585.216-1.42.329-2.5.329-.765 0-1.265-.115-2.342-.474C6.985 8.635 6.401 8.5 5.5 8.5c-1.001 0-1.834.09-2.5.279z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>Priority</span>
                  </div>

                  <div className="selections_priority-modal">
                    <div className="modal-box">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="Gw1i-E3"
                        data-icon-name="priority-icon"
                        data-priority="4"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 5a.5.5 0 01.223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.822 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0120 4.5V13a.5.5 0 01-.223.416c-1.09.727-2.518 1.084-4.277 1.084-1.113 0-1.92-.197-3.658-.776C10.204 13.178 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777V19.5a.5.5 0 01-1 0V5zm4.5 7c-1.367 0-2.535.216-3.5.654V5.277c.886-.515 2.05-.777 3.5-.777.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.367 0 2.535-.216 3.5-.654v7.377c-.886.515-2.05.777-3.5.777-.97 0-1.704-.178-3.342-.724C10.421 12.196 9.613 12 8.5 12z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span>Priority</span>
                      <span data-priority="1">1</span>
                    </div>
                    <div className="modal-box">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="Gw1i-E3"
                        data-icon-name="priority-icon"
                        data-priority="4"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 5a.5.5 0 01.223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.822 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0120 4.5V13a.5.5 0 01-.223.416c-1.09.727-2.518 1.084-4.277 1.084-1.113 0-1.92-.197-3.658-.776C10.204 13.178 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777V19.5a.5.5 0 01-1 0V5zm4.5 7c-1.367 0-2.535.216-3.5.654V5.277c.886-.515 2.05-.777 3.5-.777.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.367 0 2.535-.216 3.5-.654v7.377c-.886.515-2.05.777-3.5.777-.97 0-1.704-.178-3.342-.724C10.421 12.196 9.613 12 8.5 12z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span>Priority</span>
                      <span data-priority="2">2</span>
                    </div>
                    <div className="modal-box">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="Gw1i-E3"
                        data-icon-name="priority-icon"
                        data-priority="2"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 5a.5.5 0 01.223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.822 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0120 4.5V13a.5.5 0 01-.223.416c-1.09.727-2.518 1.084-4.277 1.084-1.113 0-1.92-.197-3.658-.776C10.204 13.178 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777V19.5a.5.5 0 01-1 0V5zm4.5 7c-1.367 0-2.535.216-3.5.654V5.277c.886-.515 2.05-.777 3.5-.777.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.367 0 2.535-.216 3.5-.654v7.377c-.886.515-2.05.777-3.5.777-.97 0-1.704-.178-3.342-.724C10.421 12.196 9.613 12 8.5 12z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span>Priority</span>
                      <span data-priority="3">3</span>
                    </div>
                    <div className="modal-box">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="Gw1i-E3"
                        data-icon-name="priority-icon"
                        data-priority="4"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 5a.5.5 0 01.223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.822 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0120 4.5V13a.5.5 0 01-.223.416c-1.09.727-2.518 1.084-4.277 1.084-1.113 0-1.92-.197-3.658-.776C10.204 13.178 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777V19.5a.5.5 0 01-1 0V5zm4.5 7c-1.367 0-2.535.216-3.5.654V5.277c.886-.515 2.05-.777 3.5-.777.97 0 1.704.178 3.342.724 1.737.58 2.545.776 3.658.776 1.367 0 2.535-.216 3.5-.654v7.377c-.886.515-2.05.777-3.5.777-.97 0-1.704-.178-3.342-.724C10.421 12.196 9.613 12 8.5 12z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span data-priority="4">Priority 4</span>
                    </div>
                  </div>
                </div>
                <div className="editor-selections_reminders">
                  <div role="button">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.414 4.706l.094.093a.5.5 0 01-.707.708l-.094-.094a2 2 0 010-2.829l.379-.378a2 2 0 012.764-.062.5.5 0 01-.676.738 1 1 0 00-1.381.03l-.379.38a1 1 0 000 1.414zm9.412-1.824a1 1 0 011.381.03l.379.38a1 1 0 010 1.414l-.094.093a.5.5 0 10.707.708l.094-.094a2 2 0 000-2.829l-.379-.378a2 2 0 00-2.764-.062.5.5 0 10.676.738zm-.042 9.108A5.482 5.482 0 018 13.499a5.482 5.482 0 01-3.784-1.509l-1.362 1.362a.5.5 0 11-.708-.707l1.408-1.408a5.5 5.5 0 118.892 0l1.408 1.408a.5.5 0 01-.707.707l-1.363-1.362zM8 12.499a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM8 5v3h2a.5.5 0 110 1H7.5a.5.5 0 01-.5-.5V5a.5.5 0 111 0z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>Reminders</span>
                  </div>
                </div>
              </div>
              <div className="editor-selections_options">
                <div role="button">
                  <svg width="15" height="3">
                    <path
                      d="M1.5 3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                      fill="currentColor"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-task_selections">
            <div className="selections-select_projects"></div>
            <div className="selections-select-action_buttons"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Today;
