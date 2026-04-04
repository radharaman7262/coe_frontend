import callApi from '@/app/api/api';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

import {
    ADD_STUDENT_ENDPOINT,
    ADMIN_LANGUAGE,
    GET_PSYCHOLOGIST_ENDPOINT,
    GET_GRADE_ENDPOINT,
    GET_SCHOOL_ENDPOINT,
    ASSIGN_STUDENT_SESSION,
    STATE_LIST_ENDPOINT,
    DISTRICT_LIST_ENDPOINT,
    BLOCK_LIST_ENDPOINT,
} from '@/app/api/apiRoutes';

import { SchoolPayloadType } from './ChildInformation/type';
import { SchedulePayload } from './ScheduleSession/type';

export const addStudentApiCall = async (body: FormData) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: ADD_STUDENT_ENDPOINT,
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
        body,
    });

    return response;
};

type GetPsychologistDatesParams = {
    userId?: string;
    startDate: string;
    endDate: string;
};

export const getPsychologistDatesListApiCall = async ({
    userId,
    startDate,
    endDate,
}: GetPsychologistDatesParams) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${GET_PSYCHOLOGIST_ENDPOINT}/${userId}`,
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
        queryParams: {
            startDate,
            endDate,
        },
    });

    return response;
};

export const createStudentScheduleApiCall = async (body: SchedulePayload) => {
    const payload = { ...body };

    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: ASSIGN_STUDENT_SESSION,
        headers: { Authorization: `Bearer ${authToken}` },
        body: payload,
    });

    return response;
};

export const getLanguageListApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: ADMIN_LANGUAGE,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const getGradeListApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: GET_GRADE_ENDPOINT,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const getSchoolListApiCall = async (payload: SchoolPayloadType) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${GET_SCHOOL_ENDPOINT}?udiseCode=${payload.udiseCode}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const getPsychologistApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: GET_PSYCHOLOGIST_ENDPOINT,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const getStateListApiCall = async () => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: STATE_LIST_ENDPOINT,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const getDistrictListApiCall = async (stateId: number) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${DISTRICT_LIST_ENDPOINT}/${stateId}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};

export const getBlockListApiCall = async (districtId: number) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: `${BLOCK_LIST_ENDPOINT}/${districtId}`,
        headers: { Authorization: `Bearer ${authToken}` },
    });

    return response;
};
