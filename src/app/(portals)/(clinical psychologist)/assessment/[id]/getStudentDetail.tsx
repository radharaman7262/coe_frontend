import React from 'react';

import { getStudentDetail } from '../../utils.api';

import ChildInformationForm from './components';

interface GetStudentDetailProps {
    id: string;
}

const GetStudentDetail = async (props: GetStudentDetailProps) => {
    const { id } = props;

    const response = await getStudentDetail(id);

    const { status, response: studentDataResponse } = response || {};

    if (!status) return null;

    const { data } = studentDataResponse || {};

    return <ChildInformationForm studentDetail={data} />;
};

export default GetStudentDetail;
