import React from 'react';

import { getSpeechTherapistStudentDetail } from '../../utils.api';

import SpeechTherapistChildInformationForm from './_components';

interface GetStudentDetailProps {
    id: string;
}

const GetChildDetail = async (props: GetStudentDetailProps) => {
    const { id } = props;

    const response = await getSpeechTherapistStudentDetail(id);

    const { status, response: studentDataResponse } = response || {};

    if (!status) return null;

    const { data } = studentDataResponse || {};

    return <SpeechTherapistChildInformationForm studentDetail={data} />;
};

export default GetChildDetail;
