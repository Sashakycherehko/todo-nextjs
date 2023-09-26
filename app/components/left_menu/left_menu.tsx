"use client";
import Link from "next/link";

export const LeftMenu = () => {
  return (
    <>
      <section className="left-menu">
        <div className="left-menu_groups">
          <div className="left-menu_links">
            <div className="left-menu_links_content">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="svg-inbox"
              >
                <g fill="currentColor" fill-rule="nonzero">
                  <path
                    d="M10 14.5a2 2 0 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z"
                    opacity="0.1"
                  ></path>
                  <path d="M8.062 4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z"></path>
                </g>
              </svg>
              <Link href={{ href: "inbox" }}>Inbox</Link>
            </div>
            <div className="left-menu_links_count">
              <span className="left-menu_inbox_count">5</span>
            </div>
          </div>
          <div className="left-menu_links">
            <div className="left-menu_links_content">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="svg-today"
              >
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
                      23
                    </tspan>
                  </text>
                </g>
              </svg>
              <Link href={{ href: "today" }}>Today</Link>
            </div>
            <div className="left-menu_links_count">
              <span className="left-menu_today_count">5</span>
            </div>
          </div>
          <div className="left-menu_links">
            <div className="left-menu_links_content">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-upcoming"
              >
                <g fill="currentColor">
                  <path
                    d="M6 4.5h12A1.5 1.5 0 0119.5 6v2.5h-15V6A1.5 1.5 0 016 4.5z"
                    opacity="0.1"
                  ></path>
                  <path d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zm10 12a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm8-4a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zM7 8h10a.5.5 0 110 1H7a.5.5 0 010-1z"></path>
                </g>
              </svg>
              <Link href="app/upcoming">Upcoming</Link>
            </div>
            <div className="left-menu_links_count">
              <span className="left-menu_upcoming_count">5</span>
            </div>
          </div>
          <div className="left-menu_links">
            <div className="left-menu_links_content">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13 6.5A1.5 1.5 0 0114.5 5h3A1.5 1.5 0 0119 6.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 0113 9.5v-3zM6.5 13A1.5 1.5 0 005 14.5v3A1.5 1.5 0 006.5 19h3a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 009.5 13h-3zm8 0a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-3zm-8-8A1.5 1.5 0 005 6.5v3A1.5 1.5 0 006.5 11h3A1.5 1.5 0 0011 9.5v-3A1.5 1.5 0 009.5 5h-3z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5 6h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 0013 6.5v3a1.5 1.5 0 001.5 1.5h3A1.5 1.5 0 0019 9.5v-3A1.5 1.5 0 0017.5 5h-3zm-8 9h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5A1.5 1.5 0 016.5 13h3a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 019.5 19h-3A1.5 1.5 0 015 17.5v-3zm9.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zm-1.5.5a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3a1.5 1.5 0 01-1.5-1.5v-3zM6.5 6h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM5 6.5A1.5 1.5 0 016.5 5h3A1.5 1.5 0 0111 6.5v3A1.5 1.5 0 019.5 11h-3A1.5 1.5 0 015 9.5v-3z"
                  fill="currentColor"
                ></path>
              </svg>
              <Link href="app/filter">Filter & Labels</Link>
            </div>
          </div>
        </div>
        <div className="left-menu_projects">
          <div className="left-menu_projects_header">
            <h3 className="left-menu_projects__title">Projects</h3>
            <div className="left-menu_projects_action">
              <button className="left-menu_projects__addProject">
                <svg width="13" height="13">
                  <path
                    d="M6 6V.5a.5.5 0 011 0V6h5.5a.5.5 0 110 1H7v5.5a.5.5 0 11-1 0V7H.5a.5.5 0 010-1H6z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <button className="left-menu_projects__roll_up">
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <path
                    d="M14 5.758L13.156 5 7.992 9.506l-.55-.48.002.002-4.588-4.003L2 5.77 7.992 11 14 5.758"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="left-menu_projects_list">
            <div className="left-menu_projects_list_box">
              <span>University</span>
            </div>
            <div className="left-menu_projects_list_box">
              <span>Work</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
