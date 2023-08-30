import { SetStateAction } from "react";

interface HandlerOpenMenu {
  stateSetOpenMenu: React.Dispatch<SetStateAction<boolean>>;
  stateIsOpenMenu: boolean;
}

interface HandlerOpenModalTask {
  stateSetOpenModalTask: React.Dispatch<SetStateAction<boolean>>;
  stateIsOpenModalTask: boolean;
}

export type { HandlerOpenMenu, HandlerOpenModalTask };
