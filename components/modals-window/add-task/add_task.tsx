export const AddTask = () => {
  return (
    <>
      <div className="background-modal">
        <div className="modal-task">
          <div className="modal-task-editor">
            <div className="modal-task-editor_name" contentEditable="true">
              <p className="modal-task-editor__content_name">Task name</p>
            </div>

            <div
              className="modal-task-editor_description"
              contentEditable="true"
            >
              <p className="modal-task-editor__content_name">Description</p>
            </div>
            <div className="modal-task-editor-option">
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
                      <div className="modal-task-date">Wen</div>
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
                    <div className="data-picker-weekDaysName"></div>
                    <div className="data-picker-monthlist"></div>
                  </div>
                </div>
              </div>
              <div className="modal-task-editor_select_priority">
                <div className="button-option">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
              </div>
              <div className="modal-task-editor_reminders">
                <div className="button-option">
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
              <div className="modal-task-editor_other">
                <div className="button-option">
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
          <div className="modal-task-action">
            <div className="modal-task_select_groups">
              <button>
                <div className="button-option">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <g fill="currentColor">
                      <path
                        d="M13.5 9.5V12a1.5 1.5 0 01-1.5 1.5H4A1.5 1.5 0 012.5 12V9.5h3.75a1.75 1.75 0 003.5 0h3.75z"
                        opacity="0.1"
                      ></path>
                      <path d="M10.491 2a2 2 0 011.923 1.45l1.509 5.28a2 2 0 01.077.55V12a2 2 0 01-2 2H4a2 2 0 01-2-2V9.28a2 2 0 01.077-.55l1.509-5.28A2 2 0 015.509 2h4.982zm0 1H5.51a1 1 0 00-.962.725l-1.509 5.28A1 1 0 003 9.28V12a1 1 0 001 1h8a1 1 0 001-1V9.28a1 1 0 00-.038-.275l-1.51-5.28a1 1 0 00-.96-.725zM6.25 9a.5.5 0 01.5.5 1.25 1.25 0 002.5 0 .5.5 0 01.5-.5h1.75a.5.5 0 110 1h-1.306a2.25 2.25 0 01-4.388 0H4.5a.5.5 0 010-1z"></path>
                    </g>
                  </svg>
                  <span>Inbox</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.646 9.646L4.854 6.854A.5.5 0 015.207 6h5.586a.5.5 0 01.353.854L8.354 9.646a.5.5 0 01-.708 0z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <div className="modal-task-action_buttons">
              <button className="button-action cancel">Cancel</button>
              <button className="button-action add-task">Add task</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
