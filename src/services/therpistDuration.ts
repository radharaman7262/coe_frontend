import { QueryKeys } from '@/utils/queryKeys';

export const therpistDurationTypeKeys = {
    all: [QueryKeys.THERPIST_DURATION],
    getTherpistDurationList: () => [...therpistDurationTypeKeys.all] as const,
};
