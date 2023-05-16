import { useReducer } from 'react';
import { SideMenuReducer } from './SideMenuReducer';
import { SideMenuContext } from './SideMenuContext';


export interface SideMenuState {
    isOpen: boolean;
}

const SideMenu_INITIAL_STATE: SideMenuState = {
    isOpen: false,
};

interface Props {
    children: React.ReactNode;
}

export const SideMenuProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(SideMenuReducer, SideMenu_INITIAL_STATE)


    const handleOpen = () => {
        dispatch({ type: '[SideMenu] - handleChange' })
    }


    return (
        <SideMenuContext.Provider value={{
            ...state,
            handleOpen,
        }}>
            {children}
        </SideMenuContext.Provider>
    )
}
