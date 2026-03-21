import { useMutation } from '@tanstack/react-query';

import { bodyPayloadType } from './type';

import { userStudentGoalService } from './useStudentGoal.service';

export type UserGoalMutationPayload = { type: 'create'; body: bodyPayloadType };

export const useStudentGoalMutation = () =>
    useMutation({
        mutationFn: async (payload: UserGoalMutationPayload) => {
            switch (payload.type) {
                case 'create':
                    return userStudentGoalService.create(payload.body);

                default:
                    return null;
            }
        },
    });
