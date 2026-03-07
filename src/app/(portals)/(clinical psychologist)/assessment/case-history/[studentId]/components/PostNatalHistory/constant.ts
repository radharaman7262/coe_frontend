import { PostNatalHistoryFormKeys, PostNatalHistoryFormType } from './type';

export const INITIAL_STATE: PostNatalHistoryFormType = {
    [PostNatalHistoryFormKeys.STUDENT_ID]: '',
    [PostNatalHistoryFormKeys.CHIEF_COMPLICATIONS]: '',
    [PostNatalHistoryFormKeys.FEEDING_ISSUES]: '',
    [PostNatalHistoryFormKeys.JAUNDICE]: '',
    [PostNatalHistoryFormKeys.VACCINATION]: '',
    [PostNatalHistoryFormKeys.HEAD_INJURY]: '',
    [PostNatalHistoryFormKeys.OTHER_COMPLICATIONS]: '',
    [PostNatalHistoryFormKeys.INFECTIONS]: '',
    [PostNatalHistoryFormKeys.PERCENTAGE]: '0',
};
