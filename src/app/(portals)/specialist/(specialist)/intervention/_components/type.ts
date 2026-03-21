import { durationDataType, levelOfSupportType } from '@/app/(portals)/(modals)/GoalModal/type';

export interface goalSetFormStateType {
    goalTitle: string;
    accuracy: string;
    behaviour: string;
    levelOfSupport: levelOfSupportType | null;
    duration: durationDataType | null;
}

export type ActionType = 'viewProfile' | 'reschedule';
