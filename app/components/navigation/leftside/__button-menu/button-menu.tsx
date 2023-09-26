import { HandlerOpenMenu } from "@/utils/interface/interface";

export const ButtonMenu = ({
  colorIcon,
  second_class = "",
  StateMenu,
}: {
  colorIcon: string;
  second_class?: string;
  StateMenu: HandlerOpenMenu;
}) => {
  return (
    <>
      <button
        className={`button-menu ${second_class}`}
        onClick={() => {
          StateMenu.stateSetOpenMenu(!StateMenu.stateIsOpenMenu);
        }}
      >
        <svg
          className="menu_icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          color={colorIcon}
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M4.5 5h15a.5.5 0 110 1h-15a.5.5 0 010-1zm0 6h15a.5.5 0 110 1h-15a.5.5 0 110-1zm0 6h15a.5.5 0 110 1h-15a.5.5 0 110-1z"
          ></path>
        </svg>
      </button>
    </>
  );
};
