import React from 'react';

import GetStudentDetail from './getStudentDetail';

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return <GetStudentDetail id={id} />;
};

export default Page;
