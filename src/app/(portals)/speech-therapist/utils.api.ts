import callApi from '@/app/api/api';

import {
    GET_SPEECH_THERAPIST_STUDENTS_DETAIL_API_URL,
    SUBMIT_SPEECH_THERAPIST_STUDENT_DETAILS,
} from '@/app/api/apiRoutes';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';
import { SpeechTherapistStudentFormType } from '@/types/speechTherapistChildInformationType';

export const getSpeechTherapistStudentDetail = async (id: string) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${GET_SPEECH_THERAPIST_STUDENTS_DETAIL_API_URL}/${id}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const submitSpeechTherapistChildInformation = async (
    body: SpeechTherapistStudentFormType,
) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: SUBMIT_SPEECH_THERAPIST_STUDENT_DETAILS,
        headers: { Authorization: `Bearer ${authToken}` },
        body,
    });

    return response;
};
