import { createContext } from 'react';

export interface SideMenuContextProps {
    isOpen: boolean;

    // Methods
    handleOpen: () => void;
}

export const SideMenuContext = createContext({} as SideMenuContextProps);