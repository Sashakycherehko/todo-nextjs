export const SelectDate = () => {
  return (
    <>
      <div className="modal-task-editor_select_date">
        <div className="button-option">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
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
        <div className="modal-task-editor_modal_date">
          <div className="modal-task-editor_date">
            <span>Aug 18</span>
          </div>
          <div className="modal-task-editor_weekDays">
            <button className="action-date modal-task-editor_today">
              <div className="modal-task-date_name">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <g fill="currentColor" fill-rule="evenodd">
                    <path
                      fill-rule="nonzero"
                      d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
                      opacity=".1"
                    ></path>
                    <path
                      fill-rule="nonzero"
                      d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
                    ></path>
                    <text
                      font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                      font-size="9"
                      transform="translate(4 2)"
                      font-weight="500"
                    >
                      <tspan x="8" y="15" text-anchor="middle">
                        18
                      </tspan>
                    </text>
                  </g>
                </svg>
                <span>Today</span>
              </div>

              <div className="modal-task-date">
                <span>Thu</span>
              </div>
            </button>
            <button className="action-date modal-task-editor_tomorrow">
              <div className="modal-task-date_name">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <g fill="currentColor" fill-rule="nonzero">
                    <path
                      d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                      opacity=".1"
                    ></path>
                    <path d="M9.704 17.543a.5.5 0 0 1 .27.654l-.956 2.31a.5.5 0 0 1-.924-.383l.957-2.31a.5.5 0 0 1 .653-.27zm5.245.27l.957 2.31a.5.5 0 0 1-.924.383l-.956-2.31a.5.5 0 0 1 .923-.382zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm-5.543 6.796a.5.5 0 0 1-.27.653l-2.31.957a.5.5 0 0 1-.383-.924l2.31-.956a.5.5 0 0 1 .653.27zm11.74-.27l2.31.956a.5.5 0 0 1-.383.924l-2.31-.957a.5.5 0 0 1 .383-.923zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm-8.124-.406l2.31.957a.5.5 0 0 1-.383.923l-2.31-.956a.5.5 0 0 1 .383-.924zm16.9.27a.5.5 0 0 1-.27.654l-2.31.956a.5.5 0 0 1-.382-.923l2.31-.957a.5.5 0 0 1 .653.27zM9.019 3.495l.956 2.31a.5.5 0 0 1-.923.382l-.957-2.31a.5.5 0 1 1 .924-.382zm6.617-.27a.5.5 0 0 1 .271.652l-.957 2.31a.5.5 0 0 1-.923-.383l.956-2.31a.5.5 0 0 1 .653-.27z"></path>
                  </g>
                </svg>
                <span>Tomorrow</span>
              </div>
              <div className="modal-task-date">
                <span>Wen</span>
              </div>
            </button>
            <button className="action-date modal-task-editor_nextweek">
              <div className="modal-task-date_name">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
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
                <span>Next week</span>
              </div>
              <div className="modal-task-date">
                <span>Aug</span>
                <span>Mon</span>
                <span>24</span>
              </div>
            </button>
            <button className="action-date modal-task-editor_nodate">
              <div className="modal-task-date_name">
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
                <span>No date</span>
              </div>
              <div className="modal-task-date"></div>
            </button>
          </div>
          <div className="data-picler">
            <div className="data-picker-top">
              <span className="data-picker_date">August 23</span>
              <div className="data-picker_actions">
                <button className="data-picker_button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M24 0v24H0V0z"></path>
                      <path
                        fill="currentColor"
                        fill-rule="nonzero"
                        d="M10.707 12l3.647 3.646a.5.5 0 01-.708.708l-4-4a.5.5 0 010-.708l4-4a.5.5 0 01.708.708L10.707 12z"
                      ></path>
                    </g>
                  </svg>
                </button>
                <button className="data-picker_button">
                  <div className="circle"></div>
                </button>
                <button className="data-picker_button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 24V0h24v24z"></path>
                      <path
                        fill="currentColor"
                        fill-rule="nonzero"
                        d="M13.293 12L9.646 8.354a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 12z"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="data-picker-weekDaysName">
              <span>S</span>
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
            </div>
            <div className="data-picker-monthlist">
              <div className="data-picker-month">
                <div className="data-picker-month_name">
                  <span>Aug</span>
                </div>
                <div className="data-picker-month_days">
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                </div>
              </div>
              <div className="data-picker-month">
                <div className="data-picker-month_name">
                  <span>Aug</span>
                </div>
                <div className="data-picker-month_days">
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                </div>
              </div>
              <div className="data-picker-month">
                <div className="data-picker-month_name">
                  <span>Aug</span>
                </div>
                <div className="data-picker-month_days">
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                  <span>1</span>
                </div>
              </div>
            </div>

            <div className="data-picker-time">
              <button className="data-picker-time_button">+ Add time</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
