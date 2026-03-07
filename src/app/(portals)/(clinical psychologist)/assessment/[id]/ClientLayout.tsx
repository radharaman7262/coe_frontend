import React, { ReactNode } from 'react';

import CaseHeader from '@/components/shared/CaseHeader';

interface ClientLayoutProps {
    children: ReactNode;
}

const ClientLayout = (props: ClientLayoutProps) => {
    const { children } = props;

    return (
        <div>
            <CaseHeader age={20} name='Paras' gender='Male' />
            {children}
        </div>
    );
};

export default ClientLayout;
