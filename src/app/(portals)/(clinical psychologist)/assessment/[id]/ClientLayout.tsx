import React, { ReactNode } from 'react';

import CaseHeader from '@/components/shared/CaseHeader';

interface ClientLayoutProps {
    children: ReactNode;
}

const ClientLayout = (props: ClientLayoutProps) => {
    const { children } = props;

    return (
        <div>
            <CaseHeader />
            {children}
        </div>
    );
};

export default ClientLayout;
