import React from 'react';

import { ContextProvider } from './_contextProvider';

import styles from './styles.module.scss';

export default function LandingLayout({
    children,
    landingHeader,
    landingImageSection,
}: {
    children: React.ReactNode;
    landingHeader: React.ReactNode;
    landingImageSection: React.ReactNode;
}) {
    return (
        <ContextProvider>
            <div>
                {children}
                <div className={styles['image-wrapper']}>
                    {landingHeader}
                    {landingImageSection}
                </div>
            </div>
        </ContextProvider>
    );
}
