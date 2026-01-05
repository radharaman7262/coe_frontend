import React from 'react';

export default function LandingLayout({
    landingHeader,
    landingImageSection,
}: {
    landingHeader: React.ReactNode;
    landingImageSection: React.ReactNode;
}) {
    return (
        <>
            {landingHeader}
            {landingImageSection}
        </>
    );
}
