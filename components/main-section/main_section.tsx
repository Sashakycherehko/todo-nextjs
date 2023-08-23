export const MainSection = () => {
  return (
    <>
      <section className="main-section">
        <div className="main-header">
          <div className="main-header_title">
            <h3 className="main-header_name_page">Today</h3>
            <div className="main-header_date">
              <span className="main-header_date__weekday">Wed</span>
              <span className="main-header_date__month">Aug</span>
              <span className="main-header_date__day">23</span>
            </div>
          </div>

          <div className="main-header_action"></div>
        </div>
        <div className="main-task">
          <div className="main-task-header">
            <h4 className="main-task-header__title">Overdue</h4>
          </div>
          <div className="main-task-container">
            <div className="main-task-box">
              <div className="main-task-box_content">
                <div className="main-task-box_check">
                  <span className="checking"></span>
                </div>
                <div className="main-task-box_title">
                  <div className="main-task-box_name_task">
                    <span>My day</span>
                  </div>
                  <div className="main-task-box_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus aut aliquam aperiam, commodi recusandae illum
                    autem dolore consequuntur molestiae ratione nulla id amet?
                  </div>
                  <div className="main-task-box_date">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.5 1h-7A1.5 1.5 0 001 2.5v7A1.5 1.5 0 002.5 11h7A1.5 1.5 0 0011 9.5v-7A1.5 1.5 0 009.5 1zM2 2.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7zM8.75 8a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM3.5 4a.5.5 0 000 1h5a.5.5 0 000-1h-5z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="main-task-box_date__month">Aug</span>
                    <span className="main-task-box_date__day">29</span>
                  </div>
                </div>
              </div>
              <div className="main-task-box_name_group"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
