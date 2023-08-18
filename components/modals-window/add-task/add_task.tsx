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
