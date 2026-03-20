import React from 'react';

import { getOTStudentDetail } from '../../utils.api';

import OTChildInformationForm from './components';

interface GetStudentDetailProps {
    id: string;
}

const GetChildDetail = async (props: GetStudentDetailProps) => {
    const { id } = props;

    const response = await getOTStudentDetail(id);

    const { status, response: studentDataResponse } = response || {};

    if (!status) return null;

    const { data } = studentDataResponse || {};

    return <OTChildInformationForm studentDetail={data} />;
};

export default GetChildDetail;
