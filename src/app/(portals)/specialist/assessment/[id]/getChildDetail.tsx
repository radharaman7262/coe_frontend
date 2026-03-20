import React from 'react';

import { getSpecialEducatorStudentDetail } from '../../utils.api';

import SpecialEducatorChildInformationForm from './_components';

interface GetStudentDetailProps {
    id: string;
}

const GetChildDetail = async (props: GetStudentDetailProps) => {
    const { id } = props;

    const response = await getSpecialEducatorStudentDetail(id);

    const { status, response: studentDataResponse } = response || {};

    if (!status) return null;

    const { data } = studentDataResponse || {};

    return <SpecialEducatorChildInformationForm studentDetail={data} />;
};

export default GetChildDetail;
