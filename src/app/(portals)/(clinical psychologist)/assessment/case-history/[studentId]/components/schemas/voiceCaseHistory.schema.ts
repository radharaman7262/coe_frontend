import { FormSchemaField } from "@/components/shared/Forms/types/form.types";

import { VoiceCaseHistoryKeys } from "../VoiceCaseHistory/type";

export const VOICE_CASE_HISTORY_SCHEMA: FormSchemaField<VoiceCaseHistoryKeys>[] = [
    {
        name: VoiceCaseHistoryKeys.ONSET,
        label: 'Onset of voice issue',
        type: 'radio',
        required: true,
        options: [
            { label: 'Sudden', value: 'sudden' },
            { label: 'Gradual', value: 'gradual' },
        ],
    },

    {
        name: VoiceCaseHistoryKeys.DURATION,
        label: 'Duration of symptoms',
        type: 'text',
        placeholder: 'Enter duration',
    },

    {
        name: VoiceCaseHistoryKeys.COURSE,
        label: 'Course',
        type: 'radio',
        required: true,
        options: [
            { label: 'Stable', value: 'stable' },
            { label: 'Progressive', value: 'progressive' },
            { label: 'Fluctuating', value: 'fluctuating' },
        ],
    },

    {
        name: VoiceCaseHistoryKeys.NATURE_OF_CONCERN,
        label: 'Nature of concern',
        type: 'radio',
        required: true,
        options: [
            { label: 'Hoarse / Breath y / Harsh voice', value: 'hoarse_breathy_harsh' },
            { label: 'Pitch too high / too low for age/gender', value: 'pitch_issue' },
            { label: 'Voice fatigue / effortful speech', value: 'voice_fatigue' },
            { label: 'Reduced loudness / excessive loudness', value: 'loudness_issue' },
        ],
    },

    {
        name: VoiceCaseHistoryKeys.ASSOCIATED_SYMPTOMS,
        label: 'Any associated symptoms',
        type: 'radio',
        options: [
            { label: 'Throat pain / tightness', value: 'throat_pain' },
            { label: 'Frequent throat clearing', value: 'throat_clearing' },
            { label: 'Cough / postnasal drip', value: 'cough_postnasal' },
            { label: 'Shortness of breath', value: 'shortness_breath' },
        ],
    },

    {
        name: VoiceCaseHistoryKeys.VOCAL_MISUSE,
        label: 'Vocal misuse/abuse habits',
        type: 'radio',
        options: [
            { label: 'Yelling / Screaming', value: 'yelling' },
            { label: 'Excessive talking', value: 'excessive_talking' },
            { label: 'Mimicking sounds / growling', value: 'mimicking' },
            { label: 'Poor hydration', value: 'poor_hydration' },
        ],
    },

    {
        name: VoiceCaseHistoryKeys.MEDICAL_HISTORY,
        label: 'Medical history',
        type: 'radio',
        options: [
            { label: 'Allergies / Asthma', value: 'allergies_asthma' },
            { label: 'GERD / LPR', value: 'gerd_lpr' },
            { label: 'Recurrent URTI', value: 'urti' },
            { label: 'Surgery / Intubation history', value: 'surgery_history' },
        ],
    },

    {
        name: VoiceCaseHistoryKeys.DEVELOPMENTAL_CONCERNS,
        label: 'Developmental concerns / co-morbidities',
        type: 'radio',
        options: [
            { label: 'Speech delay', value: 'speech_delay' },
            { label: 'ASD', value: 'asd' },
            { label: 'ADHD', value: 'adhd' },
            { label: 'Neurological', value: 'neurological' },
            { label: 'CP', value: 'cp' },
        ],
    },

    {
        name: VoiceCaseHistoryKeys.FAMILY_HISTORY,
        label: 'Family history of voice/hearing/speech issues',
        type: 'radio',
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
        ],
    },

    {
        name: VoiceCaseHistoryKeys.HEARING_STATUS,
        label: 'Hearing status',
        type: 'radio',
        options: [
            { label: 'Report available', value: 'report_available' },
            { label: 'Referred for testing', value: 'referred_testing' },
        ],
    },
];