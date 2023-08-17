import logo_profile from "../../public/images/vaider.png";
import { ButtonHome } from "./leftside/__button-home/button-home";
import { ButtonMenu } from "./leftside/__button-menu/button-menu";
import { InputSearch } from "./leftside/__input-search/input-search";
export const Navigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="navigation">
        <div className="navigation-leftside">
          <ButtonMenu
            colorIcon="white"
            second_class="navigation-leftside__button-menu"
          />
          <ButtonHome
            colorIcon="white"
            second_class="navigation-leftside__button-home"
          />
          <InputSearch />
        </div>
        <div className="navigation-rightside">
          <button className="button-navigation navigation-rightside__addTask">
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
          <div className="navigation-rightside-productivity">
            <button className="button-navigation navigation-rightside-productivity__button">
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
            <div className="navigation-rightside-productivity__modal"></div>
          </div>
          <div className="navigation-rightside-helpAndInformation">
            <button className="button-navigation navigation-rightside-helpAndInformation__button">
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
            <div className="navigation-rightside-helpAndInformation-modal"></div>
          </div>
          <div className="navigation-rightside-notification">
            <button className="button-navigation navigation-rightside-notification__button">
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
            <div className="navigation-rightside-rightside-notification-modal"></div>
          </div>
          <div className="navigation-rightside-profile">
            <button className="button-navigation navigation-rightside-profile__button">
              <img
                className="navigation-rightside-profile__ImageProfile"
                src={logo_profile.src}
              />
            </button>

            <div className="navigation-rightside-profile-modal"></div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};
