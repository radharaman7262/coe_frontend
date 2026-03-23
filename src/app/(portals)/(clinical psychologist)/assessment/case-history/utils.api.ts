import callApi from '@/app/api/api';

import { GET_CLINICAL_PSYCHOLOGIST_FORM_DETAILS, MAP_STUDENT_ENDPOINT, SPEECH_THERAPIST_SPEECH_LANGUAGE_ASSESSMENT } from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

export const getStudentFormDetails = async (args: { studentId: string; formId: string }) => {
    const { studentId, formId } = args;

    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${GET_CLINICAL_PSYCHOLOGIST_FORM_DETAILS}/${studentId}/${formId}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapStudentToSpecialist = async (body: any) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: MAP_STUDENT_ENDPOINT,
        body: { ...body },
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const getSpeechTherapistSpeechLanguageAssessment = async (id: string) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${SPEECH_THERAPIST_SPEECH_LANGUAGE_ASSESSMENT}/${id}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

