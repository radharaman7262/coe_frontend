import React from 'react';

import GetChildDetail from './getChildDetail';

const SpecialEducatorPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return <GetChildDetail id={id} />;
};

export default SpecialEducatorPage;
