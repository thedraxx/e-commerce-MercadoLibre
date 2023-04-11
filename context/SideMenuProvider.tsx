import { useReducer } from 'react';
import { SideMenuContext } from './';
import { sideMenuReducer } from './sideMenuReducer';


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

    const [state, dispatch] = useReducer(sideMenuReducer, SideMenu_INITIAL_STATE)


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
