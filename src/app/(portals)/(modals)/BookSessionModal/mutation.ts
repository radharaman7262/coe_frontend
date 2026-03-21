import { useMutation } from '@tanstack/react-query';

import { userStudentbookSessionService } from './useStudentBooking.service';

import { CreateSessionPayload } from './type';

export type UserTherpistScheduleMutationPayload = { type: 'create'; body: CreateSessionPayload };

export const useStudentTherpistScheduleMutation = () =>
    useMutation({
        mutationFn: async (payload: UserTherpistScheduleMutationPayload) => {
            switch (payload.type) {
                case 'create':
                    return userStudentbookSessionService.create(payload.body);

                default:
                    return null;
            }
        },
    });
