import { SessionStatusType } from '@/app/(portals)/admin/sessions/type';

export enum StaleAndCacheTime {
    STALE_TIME = 30 * 60 * 1000,
    CACHE_TIME = 40 * 60 * 1000,
}

export const MODAL_STYLING = {
    '& .MuiDialog-container': {
        background: 'rgba(0, 0, 0, 0.50)',
    },
    '& .MuiPaper-root': {
        borderRadius: '12px',
        minWidth: '348px',
    },
};

export const ZERO_DATA = 0;

export const EIGHT_MIN_LENGTH = 8;

export const TEN_MIN_LENGTH = 10;

export const ELEVEN_MAX_LENGTH = 11;

export const THIRTY_MAX_LENGTH = 30;

export const THREE_HUNDRED_MAX_LENGTH = 300;

export const DEBOUNCE_SEARCH_TIME = 1500;

export const LOADING_TIME_DURATION = 2000;

export const FIFTY_MAX_LENGTH = 50;

export const THREE_MIN_LENGTH = 3;

export const TWO_MIN_LENGTH = 2;

export enum StatusNumber {
    ACTIVE = 1,
    INACTIVE = 0,
}

export enum StatusNumberString {
    ACTIVE = '1',
    INACTIVE = '0',
}

export const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;

export enum Gender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other',
}

export const STATIC_GENDER = [
    { id: 1, name: Gender.Male },
    { id: 2, name: Gender.Female },
    { id: 3, name: Gender.Other },
];

export interface StatusDataType {
    id: string;
    name: string;
}

export const STATIC_STATUS = [
    { id: SessionStatusType.PENDING, name: 'Pending' },
    { id: SessionStatusType.DONE, name: 'Done' },
    { id: SessionStatusType.SCHEDULED, name: 'Scheduled' },
];

export const STUDENT_STATUS = [
    { id: SessionStatusType.PENDING, name: 'Pending' },
    { id: SessionStatusType.DONE, name: 'Done' },
    { id: SessionStatusType.SCHEDULED, name: 'Scheduled' },
];

export const generateNextDates = (days: number = 15): string[] => {
    const today = new Date();

    return Array.from({ length: days + 1 }, (_, i) => {
        const date = new Date();
        date.setDate(today.getDate() + i);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${year}-${month}-${day}`;
    });
};

export enum SchoolType {
    NO_SCHOOL = 'No School',
    HOME_SCHOOL = 'Home School',
    PLAY_SCHOOL = 'Play School',
    GOVT_SCHOOL = 'Govt. School',
    PVT_SCHOOL = 'Pvt. School',
}

export const STATIC_SCHOOL_TYPE = [
    { id: 1, name: SchoolType.NO_SCHOOL },
    { id: 2, name: SchoolType.HOME_SCHOOL },
    { id: 3, name: SchoolType.PLAY_SCHOOL },
    { id: 4, name: SchoolType.GOVT_SCHOOL },
    { id: 5, name: SchoolType.PVT_SCHOOL },
];

export enum OccupationType {
    GOVT_SERVICE = 'Government Service',
    PRIVATE_SECTOR = 'Private Sector/Job',
    BUSINESS = 'Business',
    SELF_EMPLOYED = 'Self Employed',
    AGRICULTURE = 'Agriculture/Farmer',
}

export const STATIC_OCCUPATION_TYPE = [
    { id: 1, name: OccupationType.GOVT_SERVICE },
    { id: 2, name: OccupationType.PRIVATE_SECTOR },
    { id: 3, name: OccupationType.BUSINESS },
    { id: 4, name: OccupationType.SELF_EMPLOYED },
    { id: 5, name: OccupationType.AGRICULTURE },
];

export enum SiblingType {
    YES = 'Yes',
    NO = 'No',
}

export const STATIC_SIBLING_TYPE = [
    { id: 1, name: SiblingType.YES },
    { id: 2, name: SiblingType.NO },
];

export const TREE = [
    {
        id: '33',
        name: 'Occupational Therapy Assessment CheckList',
        tableName: null,
        priority: 1,
        parentId: null,
        children: [
            {
                id: '34',
                name: 'Chief complaints observations',
                tableName: '',
                priority: 2,
                parentId: '33',
                children: [
                    {
                        id: '139',
                        name: 'Chiefcomplaintsobservations',
                        tableName: 'otchiefcomplaintsobservations',
                        priority: 1,
                        parentId: '34',
                        children: [],
                        percentage: 100,
                    },
                    {
                        id: '140',
                        name: 'ChieifCompliantDetailAnalysis',
                        tableName: 'otchieifcompliantdetailanalysis',
                        priority: 2,
                        parentId: '34',
                        children: [],
                        percentage: 100,
                    },
                ],
                percentage: 100,
            },
            {
                id: '35',
                name: 'Grossmotorskills',
                tableName: '',
                priority: 3,
                parentId: '33',
                children: [
                    {
                        id: '123',
                        name: 'Gross Moter Skills',
                        tableName: 'otgrossmotorskills',
                        priority: 1,
                        parentId: '35',
                        children: [],
                        percentage: 100,
                    },
                    {
                        id: '122',
                        name: 'Muscle Tone',
                        tableName: 'otmuscletone',
                        priority: 2,
                        parentId: '35',
                        children: [],
                        percentage: 100,
                    },
                    {
                        id: '124',
                        name: 'Muscle Strength',
                        tableName: 'otmusclestrength',
                        priority: 3,
                        parentId: '35',
                        children: [],
                        percentage: 4,
                    },
                    {
                        id: '125',
                        name: 'ROM',
                        tableName: 'otrom',
                        priority: 4,
                        parentId: '35',
                        children: [],
                        percentage: 0,
                    },
                    {
                        id: '126',
                        name: 'Balance',
                        tableName: 'otbalance',
                        priority: 5,
                        parentId: '35',
                        children: [],
                        percentage: 0,
                    },
                    {
                        id: '127',
                        name: 'Speen & Agility',
                        tableName: 'otspeedagility',
                        priority: 6,
                        parentId: '35',
                        children: [],
                        percentage: 0,
                    },
                    {
                        id: '128',
                        name: 'Edurance',
                        tableName: 'otedurance',
                        priority: 7,
                        parentId: '35',
                        children: [],
                        percentage: 0,
                    },
                    {
                        id: '130',
                        name: 'Reflexes',
                        tableName: 'otreflexes',
                        priority: 8,
                        parentId: '35',
                        children: [],
                        percentage: 0,
                    },
                ],
                percentage: 25.5,
            },
            {
                id: '36',
                name: 'Fine Motor Skills',
                tableName: '',
                priority: 4,
                parentId: '33',
                children: [
                    {
                        id: '129',
                        name: 'Fine Motor Skills',
                        tableName: 'otfinemotorskills',
                        priority: 1,
                        parentId: '36',
                        children: [],
                        percentage: 67,
                    },
                    {
                        id: '131',
                        name: 'Grasp development',
                        tableName: 'otgraspdevelopment',
                        priority: 2,
                        parentId: '36',
                        children: [],
                        percentage: 20,
                    },
                    {
                        id: '132',
                        name: 'InHand Manupulation',
                        tableName: 'otinhandmanupulation',
                        priority: 3,
                        parentId: '36',
                        children: [],
                        percentage: 0,
                    },
                ],
                percentage: 29,
            },
            {
                id: '37',
                name: 'Coordination',
                tableName: '',
                priority: 5,
                parentId: '33',
                children: [
                    {
                        id: '133',
                        name: 'Coordination',
                        tableName: 'otcoordination',
                        priority: 1,
                        parentId: '37',
                        children: [],
                        percentage: 100,
                    },
                    {
                        id: '134',
                        name: 'NonEquilibriumTests',
                        tableName: 'otnonequilibriumtests',
                        priority: 2,
                        parentId: '37',
                        children: [],
                        percentage: 0,
                    },
                    {
                        id: '135',
                        name: 'Equilibrium Tests',
                        tableName: 'otequilibriumtests',
                        priority: 3,
                        parentId: '37',
                        children: [],
                        percentage: 0,
                    },
                ],
                percentage: 33.33,
            },
            {
                id: '38',
                name: 'Sensory Processing',
                tableName: 'otsensoryprocessing',
                priority: 6,
                parentId: '33',
                children: [],
                percentage: 0,
            },
            {
                id: '39',
                name: 'Cognitiveperceptualskills',
                tableName: '',
                priority: 7,
                parentId: '33',
                children: [
                    {
                        id: '136',
                        name: 'Cognitive perceptual skills',
                        tableName: 'otcognitiveperceptualskills',
                        priority: 1,
                        parentId: '39',
                        children: [],
                        percentage: 100,
                    },
                    {
                        id: '137',
                        name: 'CognitiveSkillsAssessmentChecklist',
                        tableName: 'otcognitiveskillsassessmentchecklist',
                        priority: 2,
                        parentId: '39',
                        children: [],
                        percentage: 0,
                    },
                    {
                        id: '138',
                        name: 'PerceptualSkillsAssessmentChecklist',
                        tableName: 'otperceptualskillsassessmentchecklist',
                        priority: 3,
                        parentId: '39',
                        children: [],
                        percentage: 0,
                    },
                ],
                percentage: 33.33,
            },
            {
                id: '40',
                name: 'Communicationskills',
                tableName: 'otcommunicationskills',
                priority: 8,
                parentId: '33',
                children: [
                    {
                        id: '141',
                        name: 'Communicationskills',
                        tableName: 'otcommunicationskills',
                        priority: 1,
                        parentId: '40',
                        children: [],
                        percentage: 0,
                    },
                ],
                percentage: 0,
            },
            {
                id: '41',
                name: 'Emotionalawarenessexpression',
                tableName: 'otemotionalawarenessexpression',
                priority: 9,
                parentId: '33',
                children: [
                    {
                        id: '142',
                        name: 'Emotional Awareness Expression',
                        tableName: 'otemotionalawarenessexpression',
                        priority: 1,
                        parentId: '41',
                        children: [],
                        percentage: 0,
                    },
                ],
                percentage: 0,
            },
            {
                id: '42',
                name: 'Selfregulationcoping',
                tableName: 'otselfregulationcoping',
                priority: 10,
                parentId: '33',
                children: [
                    {
                        id: '143',
                        name: 'Self Regulation',
                        tableName: 'otselfregulationcoping',
                        priority: 1,
                        parentId: '42',
                        children: [],
                        percentage: 0,
                    },
                ],
                percentage: 0,
            },
            {
                id: '43',
                name: 'Behavior',
                tableName: 'otbehavior',
                priority: 11,
                parentId: '33',
                children: [
                    {
                        id: '144',
                        name: 'Behavior',
                        tableName: 'otbehavior',
                        priority: 1,
                        parentId: '43',
                        children: [],
                        percentage: 0,
                    },
                ],
                percentage: 0,
            },
            {
                id: '44',
                name: 'Social Skills',
                tableName: 'otsocialskills',
                priority: 12,
                parentId: '33',
                children: [
                    {
                        id: '145',
                        name: 'Social Skills',
                        tableName: 'otsocialskills',
                        priority: 1,
                        parentId: '44',
                        children: [],
                        percentage: 0,
                    },
                ],
                percentage: 0,
            },
            {
                id: '45',
                name: 'Play Skills',
                tableName: 'otplayskills',
                priority: 13,
                parentId: '33',
                children: [
                    {
                        id: '146',
                        name: 'Play Skills',
                        tableName: 'otplayskills',
                        priority: 1,
                        parentId: '45',
                        children: [],
                        percentage: 0,
                    },
                ],
                percentage: 0,
            },
            {
                id: '46',
                name: 'Activitiesofdailyliving',
                tableName: 'otactivitiesofdailyliving',
                priority: 14,
                parentId: '33',
                children: [
                    {
                        id: '147',
                        name: 'Activities of daily living',
                        tableName: 'otactivitiesofdailyliving',
                        priority: 1,
                        parentId: '46',
                        children: [],
                        percentage: 0,
                    },
                ],
                percentage: 0,
            },
            {
                id: '47',
                name: 'Assistivedevices',
                tableName: 'otassistivedevices',
                priority: 15,
                parentId: '33',
                children: [
                    {
                        id: '148',
                        name: 'Assistive Devices',
                        tableName: 'otassistivedevices',
                        priority: 1,
                        parentId: '47',
                        children: [],
                        percentage: 0,
                    },
                ],
                percentage: 0,
            },
            {
                id: '48',
                name: 'Classroombehaviour',
                tableName: 'otclassroombehaviour',
                priority: 16,
                parentId: '33',
                children: [
                    {
                        id: '149',
                        name: 'Classroom Behaviour',
                        tableName: 'otclassroombehaviour',
                        priority: 1,
                        parentId: '48',
                        children: [],
                        percentage: 0,
                    },
                ],
                percentage: 0,
            },
        ],
        percentage: 23.83,
    },
];
