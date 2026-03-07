import { ReactNode } from 'react';

import ClientLayout from '@/components/shared/Layout';

interface PortalLayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: PortalLayoutProps) => <ClientLayout>{children}</ClientLayout>;

export default Layout;