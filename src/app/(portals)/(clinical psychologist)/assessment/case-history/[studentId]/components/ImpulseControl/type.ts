export enum ImpulseControlFormKeys {
    SUSTAINED_ATTENTION = 'sustainedAttention',
    TASK_INITIATION = 'taskInitiation',
    TASK_SWITCHING = 'taskSwitching',
    IMPULSIVITY = 'impulsivity',
    HYPER_ACTIVITY = 'hyperactivity',
    RESPONSE_TO_INSTRUCTIONS = 'responseToInstructions',
}

export type ImpulseControlFormType = {
    [key in ImpulseControlFormKeys]: string;
};
