import { FormSchemaField } from "@/components/shared/Forms/types/form.types";
import { FluencyCaseHistoryKeys } from "../FluenceSpecific/type";

export const FLUENCY_CASE_HISTORY_SCHEMA: FormSchemaField<FluencyCaseHistoryKeys>[] = [
    {
        name: FluencyCaseHistoryKeys.ONSET,
        label: 'Onset of disfluency',
        type: 'radio',
        required: true,
        options: [
            { label: 'Age of onset', value: 'age_of_onset' },
            { label: 'Sudden/gradual', value: 'sudden_gradual' },
        ],
    },
    {
        name: FluencyCaseHistoryKeys.DEVELOPMENT_PATTERN,
        label: 'Development pattern',
        type: 'radio',
        required: true,
        options: [
            { label: 'Stable', value: 'stable' },
            { label: 'Worsening', value: 'worsening' },
            { label: 'Fluctuating', value: 'fluctuating' },
            { label: 'Improved', value: 'improved' },
        ],
    },
    {
        name: FluencyCaseHistoryKeys.FAMILY_HISTORY,
        label: 'Family history of stuttering',
        type: 'radio',
        required: true,
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
        ],
    },
    {
        name: FluencyCaseHistoryKeys.SPEECH_PATTERN,
        label: 'Speech patterns at home/school',
        type: 'radio',
        required: true,
        options: [
            { label: 'Same', value: 'same' },
            { label: 'Varies', value: 'varies' },
            { label: 'Situation-dependent', value: 'situation_dependent' },
        ],
    },

    // 👇 This one feels multi-choice in UI → better as checkbox group
    {
        name: FluencyCaseHistoryKeys.TRIGGER_SITUATIONS,
        label: 'Trigger situations',
        type: 'radio',
        required: false,
        options: [
            { label: 'Speaking to strangers', value: 'strangers' },
            { label: 'Answering in class', value: 'class' },
            { label: 'Phone', value: 'phone' },
            { label: 'New environments', value: 'new_environment' },
        ],
    },

    {
        name: FluencyCaseHistoryKeys.AWARENESS,
        label: 'Awareness of disfluency (child)',
        type: 'radio',
        required: true,
        options: [
            { label: 'Aware', value: 'aware' },
            { label: 'Not aware', value: 'not_aware' },
            { label: 'Mildly concerned', value: 'mildly_concerned' },
            { label: 'Anxious', value: 'anxious' },
        ],
    },

    {
        name: FluencyCaseHistoryKeys.REACTION,
        label: 'Reaction of family / peers',
        type: 'radio',
        required: true,
        options: [
            { label: 'Supportive', value: 'supportive' },
            { label: 'Teasing', value: 'teasing' },
            { label: 'Ignoring', value: 'ignoring' },
            { label: 'Over-corrective', value: 'over_corrective' },
        ],
    },

    {
        name: FluencyCaseHistoryKeys.PREVIOUS_THERAPY,
        label: 'Previous therapy (if any)',
        type: 'radio',
        required: true,
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
        ],
    },

    // 👇 clearly multi-select
    {
        name: FluencyCaseHistoryKeys.ASSOCIATED_CONCERNS,
        label: 'Associated concerns',
        type: 'radio',
        required: false,
        options: [
            { label: 'Speech delay', value: 'speech_delay' },
            { label: 'ADHD traits', value: 'adhd_traits' },
            { label: 'Social withdrawal', value: 'social_withdrawal' },
            { label: 'Anxiety', value: 'anxiety' },
        ],
    },
];