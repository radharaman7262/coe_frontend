'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';

type UserManagementContextType = {
    openLoginDrawer: boolean;
    setOpenLoginDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserManagementContext = createContext<UserManagementContextType | undefined>(undefined);

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [openLoginDrawer, setOpenLoginDrawer] = useState(false);

    const value = useMemo(() => ({ openLoginDrawer, setOpenLoginDrawer }), [openLoginDrawer]);

    return (
        <UserManagementContext.Provider value={value}>{children}</UserManagementContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserManagementContext);

    if (!context) {
        throw new Error('useUserContext must be used within ContextProvider');
    }

    return context;
};
