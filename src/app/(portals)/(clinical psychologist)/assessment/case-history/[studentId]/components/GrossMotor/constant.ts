import { GrossMotorFormKeys, GrossMotorFormType } from './type';

export const INITIAL_STATE: GrossMotorFormType = {
    [GrossMotorFormKeys.GROSS_MOTOR_SKILLS]: '',
};

export const OPTIONS = [
    { label: 'Head control (by 3–4 months)', value: 'Head control (by 3–4 months)', key: 'headControl' },
    { label: 'Trunk control (by 6–9 months)', value: 'Trunk control (by 6–9 months)', key: 'trunkControl' },
    {
        label: 'Independent sitting (by 6–8 months)',
        value: 'Independent sitting (by 6–8 months)',
        key: 'independentSitting',
    },
    { label: 'Crawling (by 8–10 months)', value: 'Crawling (by 8–10 months)', key: 'crawling' },
    {
        label: 'Walking independently (by 12–15 months)',
        value: 'Walking independently (by 12–15 months)',
        key: 'walkingIndependently',
    },
    { label: 'Runs (by 18–24 months)', value: 'Runs (by 18–24 months)', key: 'runs' },
    { label: 'Jumps with both feet (by 24–30 months)', value: 'Jumps with both feet (by 24–30 months)', key: 'jumps' },
    {
        label: 'Climbs stairs with support (by 18–24 months)',
        value: 'Climbs stairs with support (by 18–24 months)',
        key: 'climbSupport',
    },
    {
        label: 'Climbs stairs independently (by 3 years)',
        value: 'Climbs stairs independently (by 3 years)',
        key: 'climbIndependent',
    },
    { label: 'Stands on one foot (by 3.5–4 years)', value: 'Stands on one foot (by 3.5–4 years)', key: 'standOneFoot' },
    { label: 'Hops on one foot (by 4–5 years)', value: 'Hops on one foot (by 4–5 years)', key: 'hopOneFoot' },
    {
        label: 'Gait abnormalities (any age — check if present)',
        value: 'Gait abnormalities (any age — check if present)',
        key: 'gaitAbnormality',
    },
    {
        label: 'Postural control (developing through age 6)',
        value: 'Postural control (developing through age 6)',
        key: 'posturalControl',
    },
];
