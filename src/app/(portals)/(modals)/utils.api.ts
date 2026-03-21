/* eslint-disable @typescript-eslint/no-explicit-any */
import callApi from '@/app/api/api';

import { HTTP_METHOD } from '@/types/common';

import { getCookie } from '@/utils/cookieInServer';
import { JWT_TOKEN } from '@/utils/cookieManager';

import {
    CREATE_GOAL,
    GET_BOOKING_SLOT_TIME,
    SPEECH_THERAPIST_ASSIGN_BOOKING,
} from '@/app/api/apiRoutes';

import { bodyPayloadType } from './GoalModal/type';
import { CreateSessionPayload } from './BookSessionModal/type';

export const createStudentGoalApiCall = async (body: bodyPayloadType) => {
    const payload = { ...body };

    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: CREATE_GOAL,
        headers: { Authorization: `Bearer ${authToken}` },
        body: payload as any,
    });

    return response;
};

export const getTimeAndSlotApiCall = async ({
    studentId,
    startDate,
    endDate,
}: {
    studentId: string;
    startDate: string;
    endDate: string;
}) => {
    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.GET,
        url: GET_BOOKING_SLOT_TIME,
        headers: { Authorization: `Bearer ${authToken}` },
        queryParams: {
            studentId,
            startDate,
            endDate,
        },
    });
    return response;
};

export const createStudentScheduleApiCall = async (body: CreateSessionPayload) => {
    const payload = { ...body };

    const authToken = await getCookie(JWT_TOKEN);

    const response = await callApi({
        method: HTTP_METHOD.POST,
        url: SPEECH_THERAPIST_ASSIGN_BOOKING,
        headers: { Authorization: `Bearer ${authToken}` },

        body: payload as any,
    });

    return response;
};
