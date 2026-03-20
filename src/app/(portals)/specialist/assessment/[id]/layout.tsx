import { ReactNode } from 'react';

import ClientLayout from './ClientLayout';

interface PortalLayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: PortalLayoutProps) => <ClientLayout>{children}</ClientLayout>;

export default Layout;
