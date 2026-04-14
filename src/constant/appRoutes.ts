import { SpecializationEnum } from './appConstants';

export enum AppRoutes {
    LANDING_PAGE = '/',
    SUPER_ADMIN_DASHBOARD = 'super-admin/dashboard',
    CENTER_SETUP = 'super-admin/center-setup',
    CENTER_ADMIN = 'super-admin/center-admin',
    CENTER_TRACKING = 'center-tracking',
    USER_TYPE = 'super-admin/user-type',
    ROLE_MASTER = 'super-admin/role-master',
    MENU_MASTER = 'super-admin/menu-master',
    MENU_MAPPING = 'super-admin/menu-mapping',

    /** Clinical  */
    ASSESSMENT_CASE_HISTORY = 'assessment/case-history',
    DASHBOARD = 'clinical-psychologist/dashboard',
    ASSESSMENT_STUDENT_LIST = 'clinical-psychologist/assessment',
    TRACK_SESSION = 'clinical-psychologist/trackSession',
    ASSESSMENT = 'assessment',
    PROFILE = 'profile',

    /** Specialist */

    SPECIALIST_DASHBOARD = 'specialist/dashboard',
    SPECIALIST_ASSESSMENT = 'specialist/assessment',
    SPECIALIST_INTERVENTION = 'specialist/intervention',

    /** Occupational Therapist */

    OCCUPATIONAL_THERAPIST_DASHBOARD = 'occupational-therapist/dashboard',
    OCCUPATIONAL_THERAPIST_ASSESSMENT_CHILD_INFO = 'occupational-therapist/assessment/child-info',
    OCCUPATIONAL_THERAPIST_ASSESSMENT = 'occupational-therapist/assessment',
    OCCUPATIONAL_THERAPIST_INTERVENTION = 'occupational-therapist/intervention',

    /** Speech Therapist */

    SPEECH_THERAPIST_DASHBOARD = 'speech-therapist/dashboard',
    SPEECH_THERAPIST_ASSESSMENT_CHILD_INFO = 'speech-therapist/assessment/child-info',
    SPEECH_THERAPIST_ASSESSMENT = 'speech-therapist/assessment',
    SPEECH_THERAPIST_INTERVENTION = 'speech-therapist/intervention',

    /** ASSESSMENT */

    /** Profile  */

    //   PROFILE = 'profile'
}

export const ASSESSMENT_ROUTE_MAPPING: Record<string, string> = {
    [SpecializationEnum.OCCUPATIONAL_THERAPIST]: 'occupational-therapist/assessment/child-info',

    [SpecializationEnum.SPEECH_THERAPIST]: 'speech-therapist/assessment/child-info',

    [SpecializationEnum.SPECIAL_EDUCATOR]: 'specialist/assessment',
};
