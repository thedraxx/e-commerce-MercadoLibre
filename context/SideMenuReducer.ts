import { SideMenuState } from "./";

type SideMenuActionType = {
  type: "[SideMenu] - handleChange";
};

export const sideMenuReducer = (
  state: SideMenuState,
  action: SideMenuActionType
): SideMenuState => {
  switch (action.type) {
    case "[SideMenu] - handleChange":
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
};
