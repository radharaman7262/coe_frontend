import { FormSchemaField } from "@/components/shared/Forms/types/form.types";

import { FluencyObservationKeys } from "../ObservationalFindings/type";

export const FLUENCY_OBSERVATION_SCHEMA: FormSchemaField<FluencyObservationKeys>[] = [
    {
        name: FluencyObservationKeys.EYE_CONTACT,
        label: 'Eye contact',
        type: 'radio',
        required: true,
        options: [
            { label: 'Maintained', value: 'maintained' },
            { label: 'Avoids', value: 'avoids' },
            { label: 'Inconsistent', value: 'inconsistent' },
        ],
    },
    {
        name: FluencyObservationKeys.PHYSICAL_TENSION,
        label: 'Physical tension',
        type: 'radio',
        required: true,
        options: [
            { label: 'Facial grimace', value: 'facial_grimace' },
            { label: 'Neck strain', value: 'neck_strain' },
            { label: 'No tension', value: 'no_tension' },
        ],
    },
    {
        name: FluencyObservationKeys.AVOIDANCE_BEHAVIOR,
        label: 'Avoidance behaviors',
        type: 'radio',
        required: true,
        options: [
            { label: 'Word switching', value: 'word_switching' },
            { label: 'Topic shifting', value: 'topic_shifting' },
            { label: 'Silence', value: 'silence' },
        ],
    },
    {
        name: FluencyObservationKeys.ASSOCIATED_MOTOR_BEHAVIOR,
        label: 'Associated motor behavior',
        type: 'radio',
        required: true,
        options: [
            { label: 'Foot tapping', value: 'foot_tapping' },
            { label: 'Eye blinking', value: 'eye_blinking' },
            { label: 'Head movement', value: 'head_movement' },
        ],
    },
    {
        name: FluencyObservationKeys.SPEECH_INITIATION,
        label: 'Speech initiation',
        type: 'radio',
        required: true,
        options: [
            { label: 'Immediate', value: 'immediate' },
            { label: 'Delayed', value: 'delayed' },
            { label: 'Repeated attempts', value: 'repeated_attempts' },
        ],
    },
    {
        name: FluencyObservationKeys.SPEAKING_SITUATION,
        label: 'Speaking situations',
        type: 'radio',
        required: true,
        options: [
            { label: 'Comfort in structured', value: 'structured' },
            { label: 'Unstructured tasks', value: 'unstructured' },
        ],
    },
];