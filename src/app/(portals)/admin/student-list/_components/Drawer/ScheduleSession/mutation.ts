import { useMutation } from '@tanstack/react-query';

import { SchedulePayload } from './type';

import { userStudentSessionService } from './useStudent.service';

export type UserScheduleSessionMutationPayload = { type: 'create'; body: SchedulePayload };

export const useStudentScheduleSessionMutation = () =>
    useMutation({
        mutationFn: async (payload: UserScheduleSessionMutationPayload) => {
            switch (payload.type) {
                case 'create':
                    return userStudentSessionService.create(payload.body);

                default:
                    return null;
            }
        },
    });
